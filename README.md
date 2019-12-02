# Calc-u-h8

A new calculator for the web. Calc-u-h8 provides all of the same features of your desktop calculator, provided you only want to add and subtract whole numbers.

## Your Task

You have been provided with a basic scaffold for a React application, it has some buttons and some styles to make it look vaguely like a calculator. It would be great if you could finish the job, and make it work as intended:

## The 'Screen'

The idea is there is a `screen` that displays the current number, and will also display the final answer (y'know like a calculator). The screen isn't working very well at the moment, so you will first need to get that working so that numbers can be input using the buttons on the screen (bonus points if it also works with keyboards). These buttons should append the number after the current number, and should accept bizarre combinations like `001`, `100111` and `22378008`. The `AC` button then clears the screen.

## Addition

Using the `+` should result in the number being pushed to a mathematical stack (which is cleared using the `AC` button), and then another number can be added. Clicking the `=` would then add the number with the previous number in the stack.

## Subtraction

Using the `-` should result in the number being pushed to a mathematical stack (which is cleared using the `AC` button), and then another number can be added. Clicking the `=` would then subtract the number with the previous number in the stack.

## Equals

Using the `=` will trigger the `-` or `+` of the previous numbers in the stack, and push the answer into the stack and show it on the screen.

## Running

This is setup using `react-scripts` and can be worked on with the following commands

```bash
yarn install
yarn start
```

## Suggestion

1) Get it working
2) Make it look fancy

There are styles applied already, so you don't have to worry, unless you want to, and we always love a good 🥚.

_P.S. what we have provided does not need to be kept_