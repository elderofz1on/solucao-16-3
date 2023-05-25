let temperatura_alvo = 0
let temperatura = 0
hackbitmotors.MotorStopAll()
basic.forever(function () {
    temperatura = input.temperature()
    temperatura_alvo = input.temperature() - 1
    while (temperatura > temperatura_alvo) {
        temperatura = input.temperature()
        hackbitmotors.MotorRun(hackbitmotors.Motors.M1A, 255)
    }
    hackbitmotors.MotorStopAll()
    basic.pause(20000)
})
