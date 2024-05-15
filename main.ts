input.onButtonPressed(Button.A, function () {
    programa = 1
})
input.onButtonPressed(Button.AB, function () {
    programa = 3
})
input.onButtonPressed(Button.B, function () {
    programa = 2
})
let programa = 0
let NUMERO = 0
basic.showNumber(NUMERO)
basic.forever(function () {
    if (programa == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (programa == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    if (programa == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
})
