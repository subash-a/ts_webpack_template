import * as ReactDOM from "react-dom";
import * as React from "react";
import {AppComponent} from "./app";

export class App {
	private version: number;
	private signature: string;

	constructor() {
		this.version = 1;
		this.signature = "ABCD";
	}

	Run(): void {
		let container = document.getElementById("app-container");
		ReactDOM.render(React.createElement(AppComponent, {}), container);
	}
}
