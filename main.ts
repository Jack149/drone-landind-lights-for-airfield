radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
