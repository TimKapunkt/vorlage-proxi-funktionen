let IR = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        IR = Proxi.Lese_RBlock()
    } else if (input.buttonIsPressed(Button.B)) {
        IR = Proxi.Lese_LBlock()
    } else if (Proxi.RBlock(264)) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
    } else if (Proxi.LBlock(264)) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # # . .
            . # . # .
            `)
    }
})
