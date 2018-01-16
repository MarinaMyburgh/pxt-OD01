//% icon="\u2612"
//% color="255" weight="90"
namespace OD01 {

    /**
     * initialises the i2c OD01 display
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% blockId=oled_init_terminal
    //% block="initialize OD01 with height %height|width %width"
    //% icon="\u2612" 
    //% shim=OD01::init_terminal
    export function init(height: number, width: number): void {
        return;
    }

    /**
     * clears the screen.
     */
    //% blockId=OD01_clear_screen
    //% block="clear OLED display"
    //% icon="\u2612" 
    //% shim=OD01::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * prints a string on the OD01 display
     * @param text text to display
     */
    //% weight=87 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\u2612"
    //% shim=OD01::showString
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the OD01 display
     * @param number number to display
     */
    //% weight=96
    //% blockId=OD01_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OD01::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }
}
