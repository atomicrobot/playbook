+++
date = "2017-05-12T06:46:57-04:00"
title = "Peer Review Checklist"

+++

When performing a code review on a Pull Request, consider the following items regarding style and completeness.

- Does the solution address the associated ticket
- Unit Tests (Are there any? Are they testing the right thing? Are they fragile?)
- Clean of warnings and errors
- Static analysis (Xcode, SwiftLint, PMD, etc.)
- Code format - follows project style conventions
- Code structure - follows SOLID design principles/project conventions
- Clean code - magic numbers, user of constants, complexity, etc.
- Readability
- Strings are localized

