# pxt-OD01

This is the MakeCode Package for the OD01 xChip.

## Hardware Setup
1. Insert the OD01 display into the I2C ports on the break out board.

## Blocks
### Initialize OLED Display
Initializes the OLED display.

Sets up the OLED display and prepares it for use by the micro:bit.

```sig
OLED.init();
```

This block must be placed before any of the ``show`` blocks.


### Show String
Displays a string on the OLED module.

```sig
OLED.showString("hello, micro:bit!")
```

The ``init`` block must be placed before this.


### Show Number
Displays a number on the OLED module.

```sig
OLED.showNumber(123)
```

The ``init`` block must be placed before this.


### Clear Display
Clears the display.

```sig
OLED.clear()
```

The ``init`` block must be placed before this.

## Example: Counter
The following code is a simple counter that displays an increasing number every second.

```blocks
OLED.init()
let item = 0
basic.forever(() => {
    basic.pause(1000)
    item += 1
    OLED.showNumber(item)
})
```

## Supported targets

* for PXT/microbit

```package
OD01=github:xinabox/pxt-OD01
```

