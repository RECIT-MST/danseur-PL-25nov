input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 11; index++) {
    	
    }
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . . # .
        . . # . #
        . # . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . # . . .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . . # .
            . . # . #
            . # . . #
            `)
    }
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Fort!!!!")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showString("A ou B ?")
