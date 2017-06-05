/**
 * The pins used by SparkFun gamer:bit
 */
//%
enum GamerBitPin {
	//% block="P0 (D-PAD up)"
    P0 = <number>DAL.MICROBIT_ID_IO_P0,
	//% block="P1 (D-PAD left)"
    P1 = DAL.MICROBIT_ID_IO_P1,
	//% block="P2 (D-PAD right)"
    P2 = DAL.MICROBIT_ID_IO_P2,
	//% block="P8 (D-PAD down)"
    P8 = DAL.MICROBIT_ID_IO_P8,
	//% block="P12 (Y button)"
    P12 = DAL.MICROBIT_ID_IO_P12,
	//% block="P16 (X button)"
    P16 = DAL.MICROBIT_ID_IO_P16,
	//% block="P5 (A button)"
    P5 = DAL.MICROBIT_ID_IO_P5,
	//% block="P11 (B button)"
    P11 = DAL.MICROBIT_ID_IO_P11,
}

/**
 * The event raised by the SparkFun gamer:bit pins
 */
//%
enum GamerBitEvent {
	//% block="down"
	Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
	//% block="up"
	Up = DAL.MICROBIT_BUTTON_EVT_UP,
	//% block="click"
	Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions to operate the SparkFun gamer:bit
 */
//% color=#f44242 icon="\uf11b"
namespace gamerbit {
	declare var pullsInitialized: number;
	/**
	 * 
	 */
	//% shim=gamerbit::init
	function init(): void {
		return;
	}
	
	/**
	 * 
	 */
	//%
	function configurePulls(): void {
        if (pullsInitialized == 1) return;
		pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P2, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P12, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P5, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P11, PinPullMode.PullUp);
		pullsInitialized = 1;
		return;
	}
	
	/**
	 * 
	 * @param button the pin that acts as a button
	 */
	//% weight=89
	//% blockId=gamerbit_ispressed block="gamer:bit %button|is pressed"
	//% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
	export function isPressed(button: GamerBitPin): boolean {
		configurePulls();
		if(pins.digitalReadPin(<DigitalPin><number>button) == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
//		return pins.digitalReadPin(<DigitalPin><number>button) != 0; // enable touch mode
	}

	/**
	 * Registers code to run when a gamer:bit event is detected.
	 */
	//% weight=90
	//% blockId=gamerbit_onevent block="gamer:bit on %button|%event"
	//% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
	//% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
	export function onEvent(button: GamerBitPin, event: GamerBitEvent, handler: Action) {
		init();
		control.onEvent(<number>button, <number>event, handler); // register handler
	}
}
