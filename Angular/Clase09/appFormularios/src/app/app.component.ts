import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	ingresar(f) {
		if (f.valid) {
			console.log(f.value)
		} else {
			alert("El formulario no es valido")
		}

	}
}
