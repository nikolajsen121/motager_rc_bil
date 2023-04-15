radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        backward = value
    }
    if (name.compare("mgx") == 0) {
        right = value
    }
    right_motor = -1 * backward - right
    left_motor = -1 * backward + right
})
let left_motor = 0
let right_motor = 0
let right = 0
let backward = 0
bitbot.ledRainbow()
radio.setGroup(1)
basic.showIcon(IconNames.House)
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
