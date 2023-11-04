input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # . . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # . . .
        # . # . #
        # # # . #
        . # # . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # # .
        # . . # .
        # # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . # . .
        # . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # # # # .
        `)
})
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
	
})
