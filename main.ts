radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        backward = value
    }
    if (name.compare("mgx") == 0) {
        right = value
    }
    right_motor = -1 * backward - right
    left_motor = -1 * backward + right
    if (name.compare("button_a") == 0) {
        direction = 1
    }
    if (name.compare("button_b") == 0) {
        direction = 0
    }
})
let direction = 0
let left_motor = 0
let right_motor = 0
let right = 0
let backward = 0
bitbot.ledRainbow()
radio.setGroup(1)
basic.showIcon(IconNames.House)
basic.forever(function () {
    if (direction == 0) {
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
    } else {
        if (left_motor > 0) {
            bitbot.move(BBMotor.Left, BBDirection.Reverse, pins.map(
            left_motor,
            40,
            1023,
            0,
            100
            ))
            if (right_motor < 0) {
                bitbot.move(BBMotor.Right, BBDirection.Reverse, pins.map(
                right_motor,
                -40,
                -1023,
                0,
                100
                ))
            }
        }
    }
})
