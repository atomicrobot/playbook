+++
date = "2017-05-12T06:46:57-04:00"
title = "Pull Request Checklist"

+++

Prior to creating a Pull Request, consider the following items for completeness.

- Resolve all errors and warnings
- Ensure code is free of static analysis errors and warnings - run static analysis tools (Xcode, SwiftLint, etc.)
- Ensure unit tests pass
- Format code
- Remove debug logging
- Remove commented out code
- Remove TODOs
- Merge from Master/Develop to avoid conflicts in PR
- Localize strings
- Analyze performance