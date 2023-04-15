radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        turn = value
    }
    if (name.compare("mgx") == 0) {
        speed = value
    }
    right_motor = -1 * speed - turn
    left_motor = -1 * speed + turn
})
let left_motor = 0
let right_motor = 0
let speed = 0
let turn = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
bitbot.ledBrightness(14)
basic.forever(function () {
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
})
