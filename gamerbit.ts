/**
 * Functions to operate the gamer:bit
 */
//% color=#f44242 icon="\uf11b"
namespace gamerbit {
	function begin(): void {
		// Button mapping
		// P0: D-pad up
		// P1: D-pad left
		// P2: D-pad right
		// P8: D-pad down
		// P12: left button ('X' on SNES pad)
		// P16: right button ('Y' on SNES pad)
		// connectors 'A' and 'B' on back side duplicate micro:bit buttons A and B.
		pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P2, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P12, PinPullMode.PullUp);
		pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
	}

	/**
	 * Registers code to run when a gamer:bit event is detected.
	 */
	//% blockId=gamerbit_onevent block="on %event"
	export function onEvent(event: MesDpadButtonInfo, body: Action) {
	}
}
