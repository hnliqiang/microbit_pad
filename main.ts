basic.showLeds(`
    # . # . #
    # . # . #
    # # # # #
    . # # # .
    # . # . #
    `)
OmniBit.MotorStopAll()
basic.forever(function () {
    OmniBit.CarRun(OmniBit.enCarRun.Forward, 255)
    basic.pause(1000)
    OmniBit.CarRun(OmniBit.enCarRun.Back, 255)
    basic.pause(1000)
})
