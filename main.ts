let number1 = 0
let total = 0
let number2 = 0
input.onButtonPressed(Button.A, function () {
    number1 = 1
    basic.showString("" + (number1))
})
input.onButtonPressed(Button.AB, function () {
    total += number2 / number1
    basic.showString("" + (total))
})
input.onButtonPressed(Button.B, function () {
    number2 = 1
    basic.showString("" + (number2))
})
