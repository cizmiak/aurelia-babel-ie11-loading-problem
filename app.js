export class App {
	constructor() {
		this.heading = 'nothing';
	}
	
	exclaim() {
		this.heading = this.heading.replace(".", "");
		this.heading += '!';
	}
	
	activate() {
		this.heading = 'Aurelia activated...'
	}
}