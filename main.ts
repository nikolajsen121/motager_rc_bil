radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        backward = value
    }
    if (name.compare("mgx") == 0) {
        right = value
    }
    right_motor = backward
    left_motor = backward
})
let left_motor = 0
let right_motor = 0
let right = 0
let backward = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
bitbot.ledBrightness(14)
basic.forever(function () {
    if (left_motor > 0) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, pins.map(
        left_motor,
        40,
        1023,
        0,
        100
        ))
    }
    if (right_motor < 0) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, pins.map(
        right_motor,
        -40,
        -1023,
        0,
        100
        ))
    }
})
