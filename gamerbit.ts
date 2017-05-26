/**
 * Functions to operate the gamer:bit
 */
//% color=#f44242 icon="\uf11b"
namespace gamerbit {
	function begin(): void {
		// TODO what do those map to?
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
