# initialise OD01

Sets up the OD01 display and prepares it for use by the micro:bit.

```sig
OD01.init(64, 128);
```

This block must be placed before any of the ``show`` blocks.

## Parameters

* **height**: the height (in pixels) of the OLED module
* **width**: the width (in pixels) of the OLED module

## Example

```blocks
OD01.init(64, 128)
OD01.showNumber(123)
```

# See also
[``||showNumber||``](/reference/oled/showNumber),[``||showString||``](/reference/oled/showString)
