# show number on OD01

Displays a number on the OD01 module.

```sig
OD01.showNumber(123)
```

The ``init`` block must be placed before this.

## Parameters

* **number**: the number to display.

## Example

```blocks
OD01.init(64, 128)
OD01.showNumber(100)
```

# See also
[``||init||``](/reference/oled/init),[``||showString||``](/reference/oled/showstring)
