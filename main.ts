let cash = 0
input.onButtonPressed(Button.A, function () {
    if (cash > 15) {
        basic.showString("spend")
        cash += -10
    } else {
        basic.showString("save")
    }
})
basic.forever(function () {
    cash += 1
    basic.pause(1000)
})
