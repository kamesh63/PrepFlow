window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day01"] = {
  title: "Python Refresher - Basics",
  category: "python",
  topics: ["Loops & Comprehensions", "Functions & Scope", "Error Handling (try/except)", "Basic Data Types", "Jupyter Notebooks", "File I/O & Data Structures"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What is the output of: [x**2 for x in range(5)]?",
      options: ["[0, 1, 4, 9, 16]", "[1, 4, 9, 16, 25]", "[0, 1, 4, 9, 16, 25]", "[1, 2, 4, 8, 16]"],
      correct: [0],
      concept: "List comprehensions iterate over the given iterable. range(5) produces 0,1,2,3,4 and squaring each gives [0, 1, 4, 9, 16]. Remember that range(n) starts at 0 and excludes n."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which keyword is used to define a function in Python?",
      options: ["def", "func", "function", "define"],
      correct: [0],
      concept: "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses. This is different from JavaScript ('function') or other languages."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What does the 'finally' block do in a try/except/finally construct?",
      options: ["Executes regardless of whether an exception occurred", "Executes only when an exception is raised        ", "Executes only when no exception is raised         ", "Catches all unhandled exceptions automatically     "],
      correct: [0],
      concept: "The 'finally' block always executes, whether or not an exception was raised, and even if a return statement is encountered in the try or except block. It is commonly used for cleanup operations like closing files or database connections."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What is the type of the value returned by: type(3.14)?",
      options: ["<class 'float'>", "<class 'int'>  ", "<class 'str'>  ", "<class 'decimal'>"],
      correct: [0],
      concept: "In Python, any number with a decimal point is automatically a float. The type() function returns <class 'float'> for 3.14. Python does not have a built-in 'decimal' type accessible this way; the decimal module must be imported separately."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which Jupyter magic command measures the execution time of a single line of code?",
      options: ["%timeit", "%%timeit", "%time  ", "%profile"],
      correct: [0],
      concept: "%timeit is a line magic that runs a statement multiple times and reports the best average execution time. %%timeit is a cell magic that times the entire cell. %time runs only once and reports wall and CPU time."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which file mode opens a file for reading in text mode and raises an error if the file does not exist?",
      options: ["'r' ", "'w' ", "'a' ", "'rb'"],
      correct: [0],
      concept: "The 'r' mode opens a file for reading in text mode and raises a FileNotFoundError if the file does not exist. 'w' creates or truncates, 'a' creates or appends, and 'rb' reads in binary mode (also raises error if missing)."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What does enumerate() return when iterating over a list?",
      options: ["Tuples of (index, element)     ", "Only the indices of the list    ", "Only the elements of the list   ", "A dictionary of index-element pairs"],
      correct: [0],
      concept: "enumerate() returns an enumerate object that yields tuples of (index, element) on each iteration. By default, indexing starts at 0, but you can change it with the 'start' parameter: enumerate(lst, start=1)."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is the output of: list(zip([1,2,3], ['a','b']))?",
      options: ["[(1, 'a'), (2, 'b')]              ", "[(1, 'a'), (2, 'b'), (3, None)]   ", "[(1, 'a'), (2, 'b'), (3, '')]     ", "Error: zip requires equal lengths   "],
      correct: [0],
      concept: "zip() stops at the shortest iterable. Since ['a','b'] has only 2 elements, the result is [(1, 'a'), (2, 'b')]. To include all elements, use itertools.zip_longest() which fills missing values with a default (None)."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What does *args allow in a function definition?",
      options: ["Accepts a variable number of positional arguments as a tuple", "Accepts a variable number of keyword arguments as a dict  ", "Unpacks a list into individual arguments                  ", "Defines required positional-only arguments                "],
      correct: [0],
      concept: "*args collects any number of extra positional arguments into a tuple. **kwargs collects keyword arguments into a dictionary. Together they allow functions to accept arbitrary arguments."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "Which exception is raised when you try to access a key that does not exist in a dictionary?",
      options: ["KeyError      ", "IndexError    ", "ValueError    ", "AttributeError"],
      correct: [0],
      concept: "Accessing a non-existent key with dict[key] raises a KeyError. Use dict.get(key, default) to avoid this. IndexError is for sequences, ValueError for wrong value types, and AttributeError for missing attributes."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is the result of: bool('')?",
      options: ["False", "True ", "None ", "Error"],
      correct: [0],
      concept: "In Python, empty strings are falsy. bool('') returns False. Other falsy values include 0, None, [], {}, set(), and 0.0. Any non-empty string, even ' ' (a space), is truthy."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What keyword is used to handle a specific exception type in Python?",
      options: ["except ", "catch  ", "handle ", "rescue "],
      correct: [0],
      concept: "Python uses 'except' (not 'catch' like Java/JS) to handle exceptions. The syntax is: try: ... except ExceptionType as e: ... This is a common confusion point for developers coming from other languages."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "Which of the following creates a generator expression?",
      options: ["(x for x in range(10))", "[x for x in range(10)]", "{x for x in range(10)}", "<x for x in range(10)>"],
      correct: [0],
      concept: "Generator expressions use parentheses () instead of square brackets []. They produce values lazily (one at a time) rather than creating the entire list in memory, making them memory-efficient for large datasets."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "What is the output of: 'hello'[1:3]?",
      options: ["'el'", "'he'", "'ell'", "'hel'"],
      correct: [0],
      concept: "String slicing with [1:3] starts at index 1 (inclusive) and ends at index 3 (exclusive). 'hello'[1] is 'e' and 'hello'[2] is 'l', so the result is 'el'. Remember: start is inclusive, end is exclusive."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of the 'with' statement in Python?",
      options: ["It manages resources using context managers automatically", "It creates a new variable scope block                  ", "It imports modules with an alias                       ", "It defines a conditional execution block                "],
      correct: [0],
      concept: "The 'with' statement implements context managers, ensuring proper acquisition and release of resources. The most common use is file handling: with open('file.txt') as f: ... The file is automatically closed when the block exits, even if an exception occurs."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What does the 'else' clause in a for-else loop execute?",
      options: ["When the loop completes without hitting a break statement", "When the loop encounters an error during iteration       ", "When the loop body is empty                              ", "After every iteration of the loop                        "],
      correct: [0],
      concept: "In a for-else construct, the else block runs only if the loop completes normally (without a 'break'). If 'break' is executed, the else block is skipped. This is useful for search patterns where you want to know if no item was found."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is the default return value of a Python function that has no return statement?",
      options: ["None ", "0    ", "False", "''   "],
      correct: [0],
      concept: "If a function does not explicitly return a value, Python implicitly returns None. This is different from languages like C where the return value is undefined. Assigning the result of such a function gives you None."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which built-in function converts an integer to its string representation?",
      options: ["str()    ", "string() ", "toStr()  ", "convert()"],
      correct: [0],
      concept: "str() converts any object to its string representation. It calls the __str__ method of the object. For integers, str(42) returns '42'. Python does not have string(), toStr(), or convert() as built-in functions."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "In Jupyter Notebook, what does Shift+Enter do?",
      options: ["Runs the current cell and moves to the next cell ", "Runs the current cell and stays in the same cell  ", "Inserts a new cell below the current one           ", "Saves the notebook and restarts the kernel         "],
      correct: [0],
      concept: "Shift+Enter is the most common way to execute a cell in Jupyter. It runs the current cell and advances to the next one. Ctrl+Enter runs the cell but stays in place. Alt+Enter runs and inserts a new cell below."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is the output of: type({}) in Python?",
      options: ["<class 'dict'>", "<class 'set'> ", "<class 'list'>", "<class 'tuple'>"],
      correct: [0],
      concept: "Empty curly braces {} create an empty dictionary, not a set. To create an empty set, you must use set(). This is a common Python gotcha. {1, 2} creates a set, but {} creates a dict."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is the output of: list(range(2, 10, 3))?",
      options: ["[2, 5, 8]   ", "[2, 5, 8, 11]", "[3, 6, 9]   ", "[2, 4, 6, 8] "],
      correct: [0],
      concept: "range(start, stop, step) generates numbers from start to stop (exclusive) with the given step. Starting at 2, adding 3 each time: 2, 5, 8. The next value (11) exceeds 10, so it stops. range() never includes the stop value."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "Which method removes and returns the last element from a Python list?",
      options: ["pop()   ", "remove()", "del()   ", "discard()"],
      correct: [0],
      concept: "list.pop() removes and returns the last element. pop(i) removes at index i. remove(val) removes first occurrence by value (does not return it). del is a statement, not a method. discard() is a set method."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What happens when you reassign a variable inside a function without the 'global' keyword?",
      options: ["A new local variable is created in the function scope  ", "The global variable is modified directly                 ", "A SyntaxError is raised                                 ", "The variable becomes read-only within the function       "],
      correct: [0],
      concept: "Python treats any variable assigned inside a function as local by default (LEGB rule). Without the 'global' keyword, assigning to a name creates a new local variable that shadows the global one. This is a common source of UnboundLocalError."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What is the output of: [i for i in range(10) if i % 2 == 0]?",
      options: ["[0, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[1, 3, 5, 7, 9] ", "[0, 2, 4, 6, 8, 10]"],
      correct: [0],
      concept: "This list comprehension filters even numbers from range(10). The condition i % 2 == 0 selects values divisible by 2. range(10) gives 0-9, so the even values are [0, 2, 4, 6, 8]. 10 is excluded by range()."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "Which file mode opens a file for writing and creates it if it does not exist, but truncates it if it does?",
      options: ["'w'", "'a'", "'r'", "'x'"],
      correct: [0],
      concept: "'w' mode opens for writing: creates the file if it doesn't exist and truncates (empties) it if it does. 'a' appends without truncating. 'r' is read-only. 'x' creates exclusively and fails if the file already exists."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is the result of: 10 // 3 in Python 3?",
      options: ["3    ", "3.333", "4    ", "3.0  "],
      correct: [0],
      concept: "The // operator performs floor division (integer division). 10 // 3 = 3 (rounds down to nearest integer). With floats, 10.0 // 3 returns 3.0. This is different from / which returns 3.3333... in Python 3."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What will happen if you open a non-existent file using open('missing.txt', 'r')?",
      options: ["FileNotFoundError is raised    ", "An empty file object is returned", "None is returned               ", "The file is automatically created"],
      correct: [0],
      concept: "Opening a file in 'r' (read) mode raises FileNotFoundError if the file does not exist. Only 'w', 'a', and 'x' modes create files automatically. This is a common mistake when reading configuration or data files."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What does **kwargs represent in a function parameter?",
      options: ["A dictionary of keyword arguments       ", "A tuple of positional arguments          ", "A list of all arguments                  ", "A set of unique keyword argument names   "],
      correct: [0],
      concept: "**kwargs collects all extra keyword arguments passed to a function into a dictionary. For example, def f(**kwargs) called as f(a=1, b=2) makes kwargs = {'a': 1, 'b': 2}. The name 'kwargs' is convention; any name after ** works."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "Which of the following is an immutable data type in Python?",
      options: ["tuple", "list ", "dict ", "set  "],
      correct: [0],
      concept: "Tuples are immutable sequences in Python - once created, their elements cannot be changed, added, or removed. Lists, dicts, and sets are all mutable. Immutability makes tuples hashable (usable as dict keys) and slightly faster."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What is the output of: len({1, 2, 2, 3, 3, 3})?",
      options: ["3", "6", "4", "1"],
      correct: [0],
      concept: "Sets automatically remove duplicate elements. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, which has 3 unique elements. This is a fundamental property of sets and is why they are commonly used for deduplication."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "In Jupyter Notebook, what is a kernel?",
      options: ["A computational engine that executes code in the notebook", "The file system where notebooks are stored               ", "A visualization library for rendering charts              ", "The web server that hosts the notebook interface          "],
      correct: [0],
      concept: "A Jupyter kernel is the computational engine that executes the code in a notebook. Each notebook is connected to a kernel (e.g., Python, R, Julia). Restarting the kernel clears all variables and state from memory."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What is the result of: 'Python' * 2?",
      options: ["'PythonPython'    ", "Error: invalid operation", "'Python2'         ", "['Python', 'Python']   "],
      correct: [0],
      concept: "The * operator with strings performs repetition. 'Python' * 2 concatenates the string with itself, resulting in 'PythonPython'. This also works with lists: [1,2] * 2 gives [1,2,1,2]. Multiplying by 0 gives an empty string/list."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which exception is the base class for all built-in exceptions in Python?",
      options: ["BaseException ", "Exception     ", "Error         ", "RuntimeError  "],
      correct: [0],
      concept: "BaseException is the root of all exceptions in Python. Exception inherits from BaseException and is the base for most user-catchable exceptions. SystemExit, KeyboardInterrupt, and GeneratorExit inherit directly from BaseException, not Exception."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is the output of: dict.fromkeys(['a', 'b', 'c'], 0)?",
      options: ["{'a': 0, 'b': 0, 'c': 0}", "{'a': None, 'b': None, 'c': None}", "[('a', 0), ('b', 0), ('c', 0)]   ", "{'abc': 0}                        "],
      correct: [0],
      concept: "dict.fromkeys(keys, value) creates a new dictionary with all specified keys set to the same value. If value is omitted, keys default to None. This is a quick way to initialize a dictionary with uniform values."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What does the continue statement do inside a loop?",
      options: ["Skips the rest of the current iteration and moves to the next", "Exits the loop entirely                                      ", "Restarts the loop from the beginning                         ", "Pauses execution until a condition is met                    "],
      correct: [0],
      concept: "The 'continue' statement skips the remaining code in the current iteration and proceeds to the next iteration. 'break' exits the loop entirely. There is no built-in 'restart' or 'pause' statement in Python loops."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "What is the output of the following code?\n\ndef f(a, b=[]):\n    b.append(a)\n    return b\n\nprint(f(1))\nprint(f(2))",
      options: ["[1] then [1, 2]", "[1] then [2]   ", "[1] then [1]   ", "Error is raised "],
      correct: [0],
      concept: "Mutable default arguments are evaluated once at function definition, not each call. The same list object is shared across all calls. f(1) appends 1 to [], returning [1]. f(2) appends 2 to the same list [1], returning [1, 2]. Use None as default instead."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What does the LEGB rule stand for in Python variable scoping?",
      options: ["Local, Enclosing, Global, Built-in ", "Local, External, Global, Base      ", "Lexical, Enclosing, General, Built-in", "Local, Enclosed, General, Base      "],
      correct: [0],
      concept: "LEGB defines Python's variable lookup order: Local (inside the current function), Enclosing (in enclosing function for nested functions), Global (module-level), Built-in (Python's built-in names). Python searches in this order when resolving a name."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the output of:\n\nx = 10\ndef foo():\n    print(x)\n    x = 20\nfoo()",
      options: ["UnboundLocalError is raised       ", "10 is printed                      ", "20 is printed                      ", "None is printed                    "],
      correct: [0],
      concept: "Python determines variable scope at compile time, not runtime. Because x is assigned later in foo(), Python treats x as local throughout the entire function. The print(x) before the assignment references an unbound local variable, raising UnboundLocalError."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "What is the output of: {k: v for k, v in zip('abc', [1,2,3])}?",
      options: ["{'a': 1, 'b': 2, 'c': 3}", "{'abc': [1, 2, 3]}       ", "[('a',1), ('b',2), ('c',3)]", "{('a',1), ('b',2), ('c',3)}"],
      correct: [0],
      concept: "This is a dictionary comprehension. zip('abc', [1,2,3]) produces ('a',1), ('b',2), ('c',3). The comprehension creates key-value pairs from these tuples. Dict comprehensions use {k: v for ...} syntax."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "What happens when you raise an exception inside a 'finally' block?",
      options: ["The new exception replaces the original exception    ", "Both exceptions are stored and re-raised              ", "The original exception takes priority                  ", "A SyntaxError is raised for invalid exception handling "],
      correct: [0],
      concept: "If an exception is raised in a finally block, it replaces any exception that was being propagated from the try or except block. The original exception is lost. This is a subtle gotcha - be careful about code that might raise exceptions in finally."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is the output of: [x*y for x in range(3) for y in range(3) if x != y]?",
      options: ["[0, 0, 0, 2, 0, 2]", "[0, 0, 2, 0, 2]   ", "[1, 2, 2, 4]       ", "[0, 0, 0, 0, 2, 2] "],
      correct: [0],
      concept: "Nested list comprehension with a filter. For x=0: y=1->0, y=2->0. For x=1: y=0->0, y=2->2. For x=2: y=0->0, y=1->2. Result: [0, 0, 0, 2, 0, 2]. The outer loop runs first, and the condition filters pairs where x equals y."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What is the difference between a generator expression and a list comprehension in terms of memory?",
      options: ["Generators produce values lazily and use O(1) memory          ", "Generators store all values in memory like lists               ", "List comprehensions are always more memory efficient           ", "There is no memory difference between generators and lists     "],
      correct: [0],
      concept: "Generator expressions produce values one at a time (lazily), using constant O(1) memory regardless of the input size. List comprehensions create the entire list in memory at once (O(n) memory). For large datasets, generators are significantly more memory-efficient."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "What does the 'nonlocal' keyword do in Python?",
      options: ["Allows modification of a variable in the enclosing function scope", "Declares a variable as global                                    ", "Creates a new variable in the local scope                        ", "Prevents a variable from being modified in nested functions      "],
      correct: [0],
      concept: "The 'nonlocal' keyword allows a nested function to modify a variable from its enclosing (not global) scope. Without 'nonlocal', assigning to a variable in a nested function creates a new local variable. 'global' references module-level scope instead."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the output of:\n\ntry:\n    print('try')\nexcept:\n    print('except')\nfinally:\n    print('finally')",
      options: ["'try' then 'finally'               ", "'try' then 'except' then 'finally' ", "'try' only                          ", "'finally' only                      "],
      correct: [0],
      concept: "When no exception occurs, the try block executes and the except block is skipped. The finally block always executes. So the output is 'try' followed by 'finally'. The except clause only runs when an exception is actually raised in the try block."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "What is the output of: isinstance(True, int)?",
      options: ["True ", "False", "Error", "None "],
      correct: [0],
      concept: "In Python, bool is a subclass of int. True is equivalent to 1 and False is equivalent to 0. Therefore, isinstance(True, int) returns True. This means booleans can be used in arithmetic: True + True = 2."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is the result of: 0.1 + 0.2 == 0.3 in Python?",
      options: ["False", "True ", "Error", "None "],
      correct: [0],
      concept: "Due to floating-point representation in IEEE 754, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3. This is a classic gotcha in all languages using binary floating-point. Use math.isclose() or the decimal module for precise comparisons."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "Which Jupyter magic command runs a Python script from within a notebook cell?",
      options: ["%run     ", "%exec    ", "%execute ", "%load    "],
      correct: [0],
      concept: "%run executes a Python script as if it were run from the command line, and all variables defined in the script become available in the notebook's namespace. %load inserts the script's content into the cell but doesn't execute it."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What is the output of:\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
      options: ["[1, 2, 3, 4]", "[1, 2, 3]   ", "[4]         ", "Error       "],
      correct: [0],
      concept: "In Python, b = a does not create a copy; both variables reference the same list object. Modifying b also modifies a. To create an independent copy, use b = a.copy(), b = a[:], or b = list(a). For nested structures, use copy.deepcopy()."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the 'else' clause in try/except/else?",
      options: ["Executes when no exception is raised in the try block   ", "Executes when an exception is raised in the try block   ", "Executes regardless of whether an exception occurred     ", "Provides a default exception handler                     "],
      correct: [0],
      concept: "The 'else' clause in try/except/else runs only when no exception was raised in the try block. This is useful for code that should only execute if the try block succeeded, and keeps it separate from the exception-catching scope."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is a closure in Python?",
      options: ["A nested function that captures variables from its enclosing scope", "A function that closes all open file handles                      ", "A class method that restricts access to private attributes        ", "A module-level function that cannot be imported                   "],
      correct: [0],
      concept: "A closure is a function object that remembers values in its enclosing scope even after the outer function has finished executing. Closures are created when a nested function references variables from its enclosing function. They are fundamental to decorators and callbacks."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What is the output of: sorted([3, 1, 2], reverse=True)?",
      options: ["[3, 2, 1]", "[1, 2, 3]", "[2, 1, 3]", "Error    "],
      correct: [0],
      concept: "sorted() returns a new sorted list. The reverse=True parameter sorts in descending order. Note that sorted() returns a new list, while list.sort() sorts in-place and returns None. Both accept key and reverse parameters."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "How do you create a custom exception class in Python?",
      options: ["class MyError(Exception): pass         ", "class MyError(BaseException): pass     ", "exception MyError: pass                 ", "def MyError(Exception): pass            "],
      correct: [0],
      concept: "Custom exceptions should inherit from Exception (not BaseException). BaseException is for system-exiting exceptions. Using 'class MyError(Exception): pass' creates the simplest custom exception. You can add __init__ for custom attributes."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the result of: 'abc'.join(['1', '2', '3'])?",
      options: ["'1abc2abc3'", "'abc1abc2abc3'", "'123abc'     ", "'abc123'     "],
      correct: [0],
      concept: "str.join(iterable) places the string between each element of the iterable. 'abc'.join(['1','2','3']) inserts 'abc' between '1', '2', and '3', producing '1abc2abc3'. The separator is not added at the beginning or end."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What does the 'rb' file mode do?",
      options: ["Opens the file for reading in binary mode     ", "Opens the file for reading with buffering      ", "Opens the file for reading and writing in binary", "Opens the file in reverse-binary mode           "],
      correct: [0],
      concept: "'rb' opens a file for reading in binary mode. This is essential for non-text files like images, PDFs, or pickle files. In binary mode, data is read as bytes objects instead of strings. 'r+b' would be read+write binary."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What is the output of:\n\nfor i in range(3):\n    pass\nprint(i)",
      options: ["2    ", "3    ", "Error", "None "],
      correct: [0],
      concept: "In Python, the loop variable persists after the loop ends. After range(3) iterates 0, 1, 2, the variable i retains its last value of 2. This is different from languages like C++ or Java where loop variables may be scoped to the loop."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Which method returns a view of all key-value pairs in a dictionary?",
      options: ["items() ", "pairs() ", "entries()", "keyvals()"],
      correct: [0],
      concept: "dict.items() returns a view object of (key, value) tuples. dict.keys() returns keys, dict.values() returns values. These views are dynamic - they reflect changes to the dictionary. There are no pairs(), entries(), or keyvals() methods."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is the output of:\n\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner\n\nf = outer()\nprint(f())",
      options: ["10   ", "None ", "Error", "0    "],
      correct: [0],
      concept: "This demonstrates a closure. inner() captures the variable x from outer()'s scope. Even after outer() finishes executing, the returned inner function still has access to x = 10. When f() is called, it returns 10."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What does the walrus operator := do in Python 3.8+?",
      options: ["Assigns a value to a variable as part of an expression ", "Compares two values for deep equality                    ", "Performs bitwise XOR assignment                           ", "Creates a constant that cannot be reassigned              "],
      correct: [0],
      concept: "The walrus operator := (assignment expression) assigns a value to a variable as part of an expression. Example: if (n := len(data)) > 10: print(n). It avoids computing len(data) twice. Introduced in Python 3.8 (PEP 572)."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "In which order should except blocks be arranged for proper exception handling?",
      options: ["Most specific exceptions first, most general last  ", "Most general exceptions first, most specific last  ", "The order does not matter at all                    ", "Alphabetical order by exception class name          "],
      correct: [0],
      concept: "Except blocks are evaluated top-to-bottom. If a general exception (like Exception) is placed first, it catches everything, making specific handlers below it unreachable. Always put specific exceptions (ValueError, KeyError) before general ones (Exception)."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is the output of: {x: x**2 for x in range(4)}?",
      options: ["{0: 0, 1: 1, 2: 4, 3: 9}", "{1: 1, 2: 4, 3: 9, 4: 16}", "[0, 1, 4, 9]              ", "{0, 1, 4, 9}              "],
      correct: [0],
      concept: "This is a dictionary comprehension that maps each number to its square. range(4) gives 0,1,2,3. Each x becomes a key with x**2 as its value. The syntax {key: value for ...} distinguishes dict comprehensions from set comprehensions {value for ...}."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to iterate over both index and value of a list in Python? (Select all that apply)",
      options: ["for i, v in enumerate(lst):    ", "for i in range(len(lst)): v = lst[i]", "for i, v in zip(range(len(lst)), lst):", "for i, v in lst.items():              "],
      correct: [0, 1, 2],
      concept: "enumerate() is the Pythonic way, range(len(lst)) with indexing works but is less clean, and zip(range(len(lst)), lst) also works by pairing indices with elements. lst.items() is invalid because lists don't have an items() method (only dicts do)."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are falsy values in Python? (Select all that apply)",
      options: ["0        ", "None     ", "[]       ", "'False'  "],
      correct: [0, 1, 2],
      concept: "0, None, and [] (empty list) are all falsy in Python. However, the string 'False' is truthy because it is a non-empty string. Other falsy values include '', 0.0, {}, set(), and False itself. This is a very common gotcha."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly handle file operations using context managers? (Select all that apply)",
      options: ["with open('f.txt', 'r') as f: data = f.read()", "with open('f.txt') as f: lines = f.readlines()", "f = open('f.txt'); data = f.read(); f.close()  ", "with open('f.txt', 'w') as f: f.write('hello') "],
      correct: [0, 1, 3],
      concept: "Options using 'with' statements are context managers - they automatically close the file even if an exception occurs. The third option manually opens and closes the file, which is NOT a context manager pattern and is error-prone if an exception occurs between open and close."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to create a dictionary in Python? (Select all that apply)",
      options: ["{'a': 1, 'b': 2}          ", "dict(a=1, b=2)             ", "dict([('a', 1), ('b', 2)]) ", "dict{'a': 1, 'b': 2}       "],
      correct: [0, 1, 2],
      concept: "Dictionaries can be created using curly brace literals, the dict() constructor with keyword arguments, or dict() with an iterable of key-value pairs. dict{...} is invalid syntax - the constructor requires parentheses, not curly braces."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about Python tuples are correct? (Select all that apply)",
      options: ["Tuples are immutable after creation        ", "Tuples can be used as dictionary keys      ", "Tuples support indexing and slicing        ", "Tuples cannot contain mutable objects      "],
      correct: [0, 1, 2],
      concept: "Tuples are immutable (can't change elements), hashable (usable as dict keys), and support indexing/slicing. However, tuples CAN contain mutable objects like lists - e.g., t = ([1,2], 3) is valid. The tuple itself is immutable, but its mutable elements can be modified."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following exceptions are subclasses of Exception? (Select all that apply)",
      options: ["ValueError    ", "TypeError     ", "KeyError      ", "KeyboardInterrupt"],
      correct: [0, 1, 2],
      concept: "ValueError, TypeError, and KeyError all inherit from Exception. KeyboardInterrupt inherits directly from BaseException, not Exception. This is why 'except Exception' won't catch Ctrl+C (KeyboardInterrupt). SystemExit and GeneratorExit also bypass Exception."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid Jupyter Notebook cell types? (Select all that apply)",
      options: ["Code    ", "Markdown", "Raw     ", "HTML    "],
      correct: [0, 1, 2],
      concept: "Jupyter supports three cell types: Code (executable code), Markdown (formatted text with Markdown syntax), and Raw (unformatted text that is not executed or rendered). There is no native HTML cell type, though HTML can be rendered within Markdown cells."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following operations modify a list in-place? (Select all that apply)",
      options: ["lst.append(4)  ", "lst.sort()     ", "lst.extend([5])", "sorted(lst)    "],
      correct: [0, 1, 2],
      concept: "append(), sort(), and extend() all modify the list in-place and return None. sorted() creates and returns a NEW sorted list, leaving the original unchanged. This distinction between in-place and returning operations is critical for Python."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid comprehension types in Python? (Select all that apply)",
      options: ["List comprehension: [x for x in lst]  ", "Dict comprehension: {k:v for k,v in d}", "Set comprehension: {x for x in lst}   ", "Tuple comprehension: (x for x in lst) "],
      correct: [0, 1, 2],
      concept: "Python supports list, dict, and set comprehensions. (x for x in lst) creates a generator expression, NOT a tuple comprehension. Tuple comprehensions do not exist in Python. To create a tuple from a generator, use tuple(x for x in lst)."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about the 'global' keyword in Python? (Select all that apply)",
      options: ["It allows modifying a module-level variable inside a function", "It must be declared before the variable is used in the function", "It can reference variables defined outside any function         ", "It creates a new variable visible in all modules               "],
      correct: [0, 1, 2],
      concept: "'global' allows a function to modify module-level variables. It must be declared before use (typically at the start of the function). It references module-level scope, not cross-module scope. Cross-module sharing requires imports."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly describe Python's string behavior? (Select all that apply)",
      options: ["Strings are immutable                           ", "Strings support slicing with [start:stop:step]  ", "Single and double quotes can both define strings", "String concatenation with + creates a new string"],
      correct: [0, 1, 2, 3],
      concept: "All four statements are correct. Strings are immutable (can't change individual characters), support extended slicing, can be defined with single or double quotes, and concatenation always creates a new string object because of immutability."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to read file contents in Python? (Select all that apply)",
      options: ["f.read() returns the entire file as a string   ", "f.readline() reads a single line               ", "f.readlines() returns a list of all lines      ", "f.readall() reads all content as bytes         "],
      correct: [0, 1, 2],
      concept: "read() returns the entire file content as a string, readline() reads one line at a time, and readlines() returns all lines as a list. There is no readall() method in Python's file objects. For binary files, read() returns bytes."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following will raise a TypeError in Python? (Select all that apply)",
      options: ["'hello' + 5              ", "len(42)                   ", "[1, 2] + 'abc'            ", "int('abc')                "],
      correct: [0, 1, 2],
      concept: "'hello' + 5 can't concatenate str and int. len(42) fails because int has no len(). [1,2] + 'abc' can't concatenate list and str. int('abc') raises ValueError (not TypeError) because 'abc' is a string but not a valid integer representation."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid set operations in Python? (Select all that apply)",
      options: ["s1 | s2 for union               ", "s1 & s2 for intersection        ", "s1 - s2 for difference          ", "s1 + s2 for concatenation       "],
      correct: [0, 1, 2],
      concept: "Sets support | (union), & (intersection), - (difference), and ^ (symmetric difference). The + operator is NOT supported for sets - it raises a TypeError. Set operations return new sets without modifying the originals."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following Jupyter magic commands are line magics (single %)? (Select all that apply)",
      options: ["%timeit  ", "%who     ", "%pwd     ", "%%writefile"],
      correct: [0, 1, 2],
      concept: "%timeit times a single line, %who lists variables, and %pwd prints the working directory - all are line magics (single %). %%writefile is a cell magic (double %%) that writes cell contents to a file. Line magics operate on one line; cell magics on the entire cell."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following code snippets will produce an UnboundLocalError? (Select all that apply)",
      options: ["def f(): print(x); x = 5       ", "def f(): x += 1 # x is global  ", "def f(): print(x) # x is global", "def f(): global x; x = 5       "],
      correct: [0, 1],
      concept: "In both first two options, x is assigned within the function, making Python treat it as local throughout. Accessing x before assignment causes UnboundLocalError. The third option only reads global x (no error). The fourth uses 'global' to properly reference the global x."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Python's exception chaining? (Select all that apply)",
      options: ["'raise X from Y' explicitly chains exceptions       ", "The __cause__ attribute stores the chained exception ", "Exception chaining was introduced in Python 3        ", "'raise X from None' suppresses the exception context "],
      correct: [0, 1, 2, 3],
      concept: "All four are correct. 'raise X from Y' sets X.__cause__ = Y for explicit chaining. This was introduced in Python 3 (PEP 3134). 'raise X from None' suppresses the implicit exception context, giving a cleaner traceback."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are differences between dict.update() and the | operator (Python 3.9+)? (Select all that apply)",
      options: ["update() modifies the dict in-place while | returns a new dict", "The | operator was introduced in Python 3.9                    ", "update() can accept keyword arguments                          ", "The | operator only works with two dictionaries                "],
      correct: [0, 1, 2],
      concept: "dict.update() modifies in-place and can accept dicts, iterables of pairs, or keyword args. The | operator (PEP 584, Python 3.9) returns a new dict. The | operator also works with dict subclasses and follows the same merge semantics."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about nested list comprehensions? (Select all that apply)",
      options: ["The outer for clause appears first in the comprehension    ", "They can replicate nested for loops                         ", "Conditions can be applied at each level of nesting          ", "The inner for clause appears first in the comprehension     "],
      correct: [0, 1, 2],
      concept: "In nested comprehensions, the outer loop comes first: [x*y for x in A for y in B] is equivalent to: for x in A: for y in B: result.append(x*y). Conditions (if) can be added after each for clause. The inner loop does NOT come first."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following correctly describe how Python handles the 'with' statement internally? (Select all that apply)",
      options: ["__enter__() is called when entering the block       ", "__exit__() is called when leaving the block          ", "__exit__() receives exception info as parameters     ", "__init__() is called when entering the with block    "],
      correct: [0, 1, 2],
      concept: "Context managers implement __enter__() and __exit__() methods. __enter__() runs on entry and its return value is assigned to the 'as' variable. __exit__() runs on exit and receives (exc_type, exc_val, traceback) as parameters for exception handling. __init__() is for object construction, not for 'with'."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about generator expressions vs list comprehensions? (Select all that apply)",
      options: ["Generators can only be iterated once               ", "Generators do not support indexing                  ", "Generators are more memory-efficient for large data ", "Generators compute all values eagerly at creation   "],
      correct: [0, 1, 2],
      concept: "Generators produce values lazily (on demand), can only be iterated once (they are exhausted after), and do not support indexing (no random access). They are NOT eager - they compute values one at a time, making them ideal for large or infinite sequences."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Python's try/except/else/finally execution order? (Select all that apply)",
      options: ["try runs first, then else if no exception, then finally        ", "finally always executes even if return is in try               ", "except runs before else when an exception occurs               ", "else runs before finally when there is no exception            "],
      correct: [0, 1, 2, 3],
      concept: "The full order is: try -> (except if error, else if no error) -> finally. The finally block always runs, even after return statements. When an exception occurs, except runs (else is skipped). When no exception, else runs (except is skipped). Finally is always last."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following Jupyter kernel operations clear the variable namespace? (Select all that apply)",
      options: ["Restart kernel                    ", "Restart kernel and clear output   ", "Restart kernel and run all cells  ", "Clear all outputs                 "],
      correct: [0, 1, 2],
      concept: "All three restart operations clear the kernel's variable namespace because restarting kills the Python process and starts a new one. 'Clear all outputs' only removes displayed cell outputs without affecting the kernel state or variables in memory."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid ways to handle multiple exception types in a single except block? (Select all that apply)",
      options: ["except (ValueError, TypeError) as e:  ", "except (ValueError, TypeError):       ", "except ValueError as e, TypeError:    ", "except ValueError | TypeError as e:   "],
      correct: [0, 1],
      concept: "Multiple exceptions can be caught using a tuple: except (ValueError, TypeError) as e: or without 'as'. The comma syntax (option 3) is Python 2 style and invalid in Python 3. The pipe operator (option 4) is used in match/case (Python 3.10+), not except blocks."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Python's dict ordering behavior? (Select all that apply)",
      options: ["Dicts maintain insertion order since Python 3.7+               ", "OrderedDict provides additional ordering features              ", "Equality comparison of dicts considers insertion order          ", "Iterating over dict.keys() returns keys in insertion order     "],
      correct: [0, 1, 3],
      concept: "Since Python 3.7, regular dicts maintain insertion order (implementation detail since 3.6). OrderedDict adds move_to_end() and reversed(). However, dict equality (==) does NOT consider order: {'a':1, 'b':2} == {'b':2, 'a':1} is True."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In Python, a list comprehension [x for x in range(1000000)] creates all one million elements in memory immediately.",
      options: ["True - list comprehensions eagerly evaluate and store all elements in memory at once ", "False - list comprehensions use lazy evaluation and generate elements one at a time   "],
      correct: [0],
      concept: "List comprehensions are eager - they compute and store all elements in memory immediately. This is why generator expressions (x for x in range(1000000)) are preferred for large datasets, as they compute values lazily on demand."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "The expression 'not not True' evaluates to True in Python.",
      options: ["True - double negation returns the original boolean value  ", "False - double negation converts the value to None        "],
      correct: [0],
      concept: "'not True' gives False, and 'not False' gives True. So 'not not True' evaluates to True. Double negation with 'not' always returns the boolean equivalent of the original value. This is sometimes used as a shorthand for bool()."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "In Python, you can use a try block without any except clause if you include a finally block.",
      options: ["True - try/finally is valid without except clauses                           ", "False - every try block must have at least one except clause                  "],
      correct: [0],
      concept: "try/finally is perfectly valid without except. This pattern is used when you want cleanup code (finally) to run regardless of exceptions but don't want to handle the exceptions yourself. The exception will still propagate after finally executes."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "The expression a = b = c = [] in Python creates three separate empty lists.",
      options: ["False - all three variables reference the same single list object             ", "True - each variable gets its own independent empty list                      "],
      correct: [0],
      concept: "Chained assignment a = b = c = [] creates ONE list object and all three variables reference it. Modifying the list through any variable affects all of them. To create independent lists, use: a, b, c = [], [], [] or list comprehensions."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "In Python 3, the range() function returns a list of integers.",
      options: ["False - range() returns a range object that generates values lazily            ", "True - range() returns a list just like in Python 2                           "],
      correct: [0],
      concept: "In Python 3, range() returns a range object (not a list). It generates values lazily and supports len(), indexing, and membership testing without creating all values in memory. In Python 2, range() returned a list; xrange() was the lazy version."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "The statement 'except Exception' will catch a KeyboardInterrupt raised by pressing Ctrl+C.",
      options: ["False - KeyboardInterrupt inherits from BaseException, not Exception          ", "True - Exception is the base class for all exceptions including KeyboardInterrupt"],
      correct: [0],
      concept: "KeyboardInterrupt inherits from BaseException, not Exception. This design prevents 'except Exception' from accidentally catching Ctrl+C. To catch it, use 'except BaseException' or 'except KeyboardInterrupt' specifically."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "A Python tuple containing a single element requires a trailing comma, like (42,).",
      options: ["True - without the comma, (42) is just an integer in parentheses, not a tuple", "False - (42) creates a single-element tuple without needing a comma           "],
      correct: [0],
      concept: "In Python, (42) is just the integer 42 wrapped in parentheses (grouping). To create a single-element tuple, you must include a trailing comma: (42,). This is a common gotcha. For multiple elements, t = (1, 2, 3) works fine without trailing comma."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "In Python, the 'is' operator and the '==' operator always produce the same result for integer comparisons.",
      options: ["False - 'is' checks identity (same object), '==' checks equality (same value)  ", "True - both operators compare integer values in the same way                    "],
      correct: [0],
      concept: "'==' checks value equality, while 'is' checks identity (same object in memory). Python caches small integers (-5 to 256), so 'is' may return True for those, but for larger integers, two equal values may be different objects. Never use 'is' for value comparison."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "In Jupyter Notebook, restarting the kernel will automatically re-run all previously executed cells.",
      options: ["False - restarting only clears the kernel state; cells must be re-run manually  ", "True - restarting the kernel also re-executes all cells in the notebook         "],
      correct: [0],
      concept: "Restarting the kernel only clears the Python process (all variables, imports, and state are lost). It does NOT re-execute any cells. You must manually run cells again or use 'Restart & Run All'. Cell outputs may still be displayed but are stale."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "The dict.get(key, default) method raises a KeyError if the key is not found.",
      options: ["False - dict.get() returns the default value (or None) if the key is not found ", "True - dict.get() raises KeyError just like dict[key] when the key is missing   "],
      correct: [0],
      concept: "dict.get(key, default) returns the default value if the key doesn't exist (None if no default specified). It NEVER raises KeyError. This is the safe alternative to dict[key] which does raise KeyError for missing keys."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Python allows assigning multiple variables in a single line using tuple unpacking: a, b = 1, 2.",
      options: ["True - this is tuple unpacking, where the right side creates a tuple that is unpacked into variables", "False - Python does not support multiple assignment in a single statement                               "],
      correct: [0],
      concept: "Tuple unpacking (destructuring) allows assigning multiple variables at once: a, b = 1, 2. This also enables swapping: a, b = b, a. Extended unpacking with * is also supported: first, *rest = [1, 2, 3, 4] gives first=1, rest=[2, 3, 4]."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "When using open() with mode 'a', writing to the file will overwrite existing content from the beginning.",
      options: ["False - 'a' (append) mode adds new content at the end of the file without overwriting", "True - 'a' mode positions the cursor at the start and overwrites existing content    "],
      correct: [0],
      concept: "The 'a' (append) mode always writes at the end of the file, preserving existing content. 'w' (write) mode is what overwrites/truncates the file. The 'a' mode also creates the file if it doesn't exist, just like 'w'."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "In Python, strings are mutable objects that can be changed character by character using indexing.",
      options: ["False - strings are immutable; you cannot change individual characters after creation", "True - strings support item assignment like s[0] = 'H' to change characters        "],
      correct: [0],
      concept: "Python strings are immutable. Attempting s[0] = 'H' raises a TypeError. To modify a string, you must create a new one: s = 'H' + s[1:]. This immutability allows strings to be hashable and used as dictionary keys."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "A Python set can contain duplicate elements, but they are only counted once when using len().",
      options: ["False - sets automatically remove duplicates upon insertion, so duplicates never exist in a set", "True - sets store all elements including duplicates but len() counts unique values only       "],
      correct: [0],
      concept: "Sets never contain duplicates. When you add a duplicate element, it is simply ignored. The set data structure uses hashing to ensure uniqueness. {1, 1, 2, 2, 3} immediately becomes {1, 2, 3} with len() = 3."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "The contextlib.contextmanager decorator allows you to create context managers using generator functions with a single yield.",
      options: ["True - @contextmanager turns a generator with one yield into a context manager  ", "False - context managers can only be created by implementing __enter__/__exit__  "],
      correct: [0],
      concept: "@contextlib.contextmanager simplifies context manager creation. The code before yield runs as __enter__, the yielded value becomes the 'as' variable, and code after yield runs as __exit__. This avoids writing a full class with __enter__/__exit__ methods."
    }
  ]
};
