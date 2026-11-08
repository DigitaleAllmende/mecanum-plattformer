radio.onReceivedString(function (receivedString) {
    if (receivedString == "D") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M1_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.forward, 4095)
        } else {
            if (Plattform == 1) {
                pins.digitalWritePin(DigitalPin.P14, 0)
                pins.digitalWritePin(DigitalPin.P15, 1)
                basic.pause(10)
                pins.digitalWritePin(DigitalPin.P14, 0)
                pins.digitalWritePin(DigitalPin.P15, 0)
            }
        }
    }
    if (receivedString == "U") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M1_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.backward, 4095)
        } else {
            if (Plattform == 1) {
                pins.digitalWritePin(DigitalPin.P14, 1)
                pins.digitalWritePin(DigitalPin.P15, 0)
                basic.pause(10)
                pins.digitalWritePin(DigitalPin.P14, 0)
                pins.digitalWritePin(DigitalPin.P15, 0)
            }
        }
    }
    if (receivedString == "R") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M1_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.forward, 4095)
        }
    }
    if (receivedString == "L") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M1_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.backward, 4095)
        }
    }
    if (receivedString == "UR") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M2_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.forward, 0)
            servo_motor.motor(Motor.M1_A, Dir.forward, 0)
        }
    }
    if (receivedString == "DR") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M2_B, Dir.forward, 4095)
            servo_motor.motor(Motor.M1_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.forward, 0)
            servo_motor.motor(Motor.M1_B, Dir.forward, 0)
        }
    }
    if (receivedString == "DL") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M2_A, Dir.backward, 4095)
            servo_motor.motor(Motor.M1_B, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_B, Dir.forward, 0)
            servo_motor.motor(Motor.M1_A, Dir.forward, 0)
        }
    }
    if (receivedString == "UL") {
        if (Plattform == 0) {
            servo_motor.motor(Motor.M2_B, Dir.backward, 4095)
            servo_motor.motor(Motor.M1_A, Dir.forward, 4095)
            servo_motor.motor(Motor.M2_A, Dir.forward, 0)
            servo_motor.motor(Motor.M1_B, Dir.forward, 0)
        }
    }
    if (receivedString == "KB") {
        servo_motor.motor(Motor.M1_A, Dir.forward, 4095)
        servo_motor.motor(Motor.M1_B, Dir.forward, 4095)
        servo_motor.motor(Motor.M2_A, Dir.forward, 4095)
        servo_motor.motor(Motor.M2_B, Dir.forward, 4095)
        basic.pause(200)
    }
    if (receivedString == "KA") {
        servo_motor.motor(Motor.M1_A, Dir.backward, 4095)
        servo_motor.motor(Motor.M1_B, Dir.backward, 4095)
        servo_motor.motor(Motor.M2_A, Dir.backward, 4095)
        servo_motor.motor(Motor.M2_B, Dir.backward, 4095)
        basic.pause(200)
    }
    if (receivedString == "N") {
        servo_motor.motor(Motor.M1_A, Dir.forward, 0)
        servo_motor.motor(Motor.M1_B, Dir.forward, 0)
        servo_motor.motor(Motor.M2_A, Dir.forward, 0)
        servo_motor.motor(Motor.M2_B, Dir.forward, 0)
    }
    if (receivedString == "KC") {
    	
    }
    if (receivedString == "KE") {
    	
    }
    if (receivedString == "KF") {
        if (Licht == 1) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            Licht = 0
        } else {
            if (Licht == 0) {
                pins.digitalWritePin(DigitalPin.P13, 1)
                Licht = 1
            }
        }
    }
    if (receivedString == "KD") {
        if (Plattform == 0) {
            Plattform = 1
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(500)
        } else {
            if (Plattform == 1) {
                Plattform = 0
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    # # # # #
                    . # # # .
                    # . # . #
                    `)
                basic.pause(500)
            }
        }
    }
})
let Plattform = 0
let Licht = 0
radio.setGroup(1)
basic.showNumber(1)
basic.pause(1000)
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
Licht = 0
Plattform = 0
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
