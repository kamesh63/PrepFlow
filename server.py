import http.server
import socketserver
import json
import os
import urllib.parse

PORT = 8081
DB_FILE = 'database.json'

def load_db():
    if os.path.exists(DB_FILE):
        with open(DB_FILE, 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                pass
    return {"users": {}}

def save_db(data):
    with open(DB_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def load_config():
    if os.path.exists('config.json'):
        with open('config.json', 'r') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                pass
    return {"admin_password": "admin"}

class APIHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(load_db()).encode())
            return
        
        # Fallback to normal file serving
        return super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')
        
        try:
            req_data = json.loads(body) if body else {}
        except:
            req_data = {}

        if self.path == '/api/register':
            db = load_db()
            username = req_data.get('username')
            mobile = req_data.get('mobile')
            
            if username in db['users']:
                self._send_json(400, {"error": "Username already taken"})
                return
                
            for u in db['users'].values():
                if u.get('mobile') == mobile:
                    self._send_json(400, {"error": "Mobile number already registered"})
                    return
            
            db['users'][username] = req_data['userData']
            save_db(db)
            self._send_json(200, {"success": True})
            return

        elif self.path == '/api/login':
            db = load_db()
            username = req_data.get('username')
            passwordHash = req_data.get('passwordHash')
            
            user = db['users'].get(username)
            if not user:
                self._send_json(404, {"error": "User not found"})
                return
            if user.get('passwordHash') != passwordHash:
                self._send_json(401, {"error": "Incorrect password"})
                return
            
            # Update login info
            user['lastLogin'] = req_data.get('time', 0)
            if 'loginHistory' not in user:
                user['loginHistory'] = []
            user['loginHistory'].append({"loginAt": req_data.get('time', 0)})
            save_db(db)
            
            self._send_json(200, {"success": True, "userData": user})
            return

        elif self.path == '/api/sync':
            # Sync user's progress, time, state
            db = load_db()
            username = req_data.get('username')
            if username in db['users']:
                updates = req_data.get('updates', {})
                for k, v in updates.items():
                    db['users'][username][k] = v
                save_db(db)
                self._send_json(200, {"success": True})
            else:
                self._send_json(404, {"error": "User not found"})
            return

        elif self.path == '/api/admin/login':
            config = load_config()
            password = req_data.get('password')
            if password == config.get('admin_password'):
                self._send_json(200, {"success": True, "token": "admin-secure-token-123"})
            else:
                self._send_json(401, {"error": "Incorrect admin password"})
            return

        elif self.path == '/api/admin/status':
            token = req_data.get('token')
            if token != "admin-secure-token-123":
                self._send_json(401, {"error": "Unauthorized"})
                return

            db = load_db()
            username = req_data.get('username')
            new_status = req_data.get('status')
            if username in db['users']:
                db['users'][username]['status'] = new_status
                save_db(db)
                self._send_json(200, {"success": True})
            else:
                self._send_json(404, {"error": "User not found"})
            return

        self.send_response(404)
        self.end_headers()

    def _send_json(self, code, data):
        self.send_response(code)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

if __name__ == '__main__':
    with socketserver.TCPServer(("0.0.0.0", PORT), APIHandler) as httpd:
        print(f"Server started at port {PORT}")
        httpd.serve_forever()
