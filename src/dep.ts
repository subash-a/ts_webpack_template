// Standlone file does not import from anything

export class App {
	private version: number;
	private signature: string;

	constructor() {
		this.version = 1;
		this.signature = "ABCD";
	}

	Run(): void {
		console.log("app is running...");
	}
}
