import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	personas: Array<string> = ["Persona 1", "Persona 2", "Persona 3"]
}
