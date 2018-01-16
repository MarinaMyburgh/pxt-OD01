// tests go here; this will not be compiled when this package is used as a library

OD01.init(64, 128)
OD01.showString("hello, world!")
OD01.showString("counter:")
let item = 0
basic.forever(() => {
    basic.pause(1000)
    item += 1
    OD01.showNumber(item)
})

