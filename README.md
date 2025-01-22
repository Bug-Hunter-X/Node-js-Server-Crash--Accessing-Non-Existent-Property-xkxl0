# Node.js Server Crash: Accessing Non-Existent Property

This repository demonstrates a common yet easily overlooked error in Node.js server development: attempting to access a non-existent property of the `http.Server` object. This can lead to unexpected crashes and application instability.

The `serverBug.js` file contains the buggy code, while `serverBugSolution.js` provides a corrected version.  The error occurs because the code attempts to access `server.nonExistentProperty`, which throws a `TypeError`.  The solution involves careful error handling and checking for the existence of properties before accessing them.