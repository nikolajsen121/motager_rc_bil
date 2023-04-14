radio.onReceivedString(function (receivedString) {
	
})
radio.onReceivedValue(function (name, value) {
	
})
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
radio.setGroup(1)
radio.setFrequencyBand(0)
basic.forever(function () {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= 7) {
        for (let index = 0; index < 1; index++) {
            bitbot.setPixelColor(0, 0x00FF00)
            bitbot.setPixelColor(1, 0x00FF00)
            bitbot.setPixelColor(2, 0x00FF00)
            bitbot.setPixelColor(3, 0x00FF00)
            bitbot.setPixelColor(4, 0x00FF00)
            bitbot.setPixelColor(5, 0x00FF00)
        }
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= 6) {
        for (let index = 0; index < 1; index++) {
            bitbot.setPixelColor(0, 0x00FF00)
            bitbot.setPixelColor(1, 0x00FF00)
            bitbot.setPixelColor(2, 0x00FF00)
            bitbot.setPixelColor(3, 0x00FF00)
            bitbot.setPixelColor(4, 0x00FF00)
            bitbot.setPixelColor(5, 0xFF8000)
        }
    } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < 6) {
        for (let index = 0; index < 1; index++) {
            bitbot.setPixelColor(0, 0x00FF00)
            bitbot.setPixelColor(1, 0x00FF00)
            bitbot.setPixelColor(2, 0x00FF00)
            bitbot.setPixelColor(3, 0x00FF00)
            bitbot.setPixelColor(4, 0xFF8000)
            bitbot.setPixelColor(5, 0xFF0000)
        }
    } else {
    	
    }
})
