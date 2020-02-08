"The challenge is about communicating the nature of problems and solutions, so having something working is not really the main aim."

## TODO

- Add Prettier and ESLint.
- Screen:
  - Display numbers entered.
  - Accept combinations like `001`, `100111` and `22378008`.
- Operations:
  - `+` or `-` should result in the number being pushed to a 'mathematical stack' [MS is presumably a pair of numbers - aggregate and next number], and then another number can be added.
  - `AC` clears the stack & screen.
  - Clicking the `=` would then add/subtract the number with the previous number in the stack.
  - Using the `-` should result in the number being pushed to a mathematical stack (which is cleared using the `AC` button), and then another number can be added. Clicking the `=` would then subtract the number with the previous number in the stack.
  - Using the `=` will trigger the `-` or `+` of the previous numbers in the stack, and push the answer into the stack and show it on the screen.

- Then:
  - 'AC' (clear all) becomes 'CE' (clear entry) when MS is populated. Icon could be either 'D' or back arrow with X in center.
  - If aggregate is main item on screen, show last operation above it ('aggregate +/- new number').
  - Keyboard keys for all (0-9 + - =, and AC/CE can be 'backspace')
  - Layout.
  - Shared colors - numbers, operations, equals
  - Styles - once over on current layout:
    - Cursor.
    - Proper buttons.
    - Prevent selection of button text.
    - Separate calculator border / background.
    - Center and resize text.
    - Buttons perhaps square, no padding, hover / active colors.
    - Contrasting color for equals.
    - Font pairing (header + buttons)
    - Colors - background gradient to match equals?
  - Help widget, or title text on buttons?
  - 🥚
