# PrepFlow

**PrepFlow** is a modern, high-performance web application designed for intensive certification mastery and daily quiz tracking. Built with a responsive, glassmorphism-inspired UI and a lightweight Python backend, it offers seamless progress tracking, administrative oversight, and mobile-verified user registration.

## ✨ Features

- **Daily Certification Quizzes:** Dynamic loading of 51 days of structured quiz data.
- **Admin Dashboard:** Real-time tracking of user progress, online status, session time, and login history.
- **Mobile Verification:** Secure registration enforcing one account per 10-digit mobile number.
- **Approval Workflow:** Admins can approve, reject, or kick users to manage platform access.
- **Auto-Save Engine:** Continuous background state synchronization ensuring zero data loss.
- **Modern UI/UX:** Clean, symmetric design utilizing CSS variables, dynamic animations, and responsive grids.

## 📁 Project Structure

```text
PrepFlow/
├── css/
│   └── style.css            # Centralized design system and UI components
├── js/
│   ├── app.js               # Core application logic, routing, and API integration
│   └── questions/           # Daily quiz data modules (day01.js - day51.js)
├── index.html               # Main Single Page Application (SPA) view
└── server.py                # Lightweight Python backend server for state management
```

## 🚀 Quick Start (Local Development)

The application utilizes a zero-dependency Python backend for centralized state management.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kamesh63/PrepFlow.git
   cd PrepFlow
   ```

2. **Start the backend server:**
   ```bash
   python server.py
   ```
   *The server will start on port `8080`.*

3. **Access the application:**
   Open your browser and navigate to `http://localhost:8080`.

## 🛡️ Admin Access
- **Admin Login:** Click the lock icon in the application header.
- **Password:** Create a `config.json` file in the root directory with the following content to set your secure admin password:
  ```json
  {
    "admin_password": "your_secure_password_here"
  }
  ```

## ☁️ Deployment (PythonAnywhere)
To host the application on a production server like PythonAnywhere:
1. Upload the repository files.
2. Configure a WSGI runner to execute the `HTTPServer` from `server.py` on a background thread.
3. Add `database.json` to your `.gitignore` to prevent committing live user data.

---
*Built with simplicity, speed, and reliability.*
