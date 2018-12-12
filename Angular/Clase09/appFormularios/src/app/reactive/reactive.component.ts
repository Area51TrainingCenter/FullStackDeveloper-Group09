import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

	grupo: FormGroup

	constructor() { }

	ngOnInit() {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email, this.validarCorreoEmpresarial]),
			contrasena: new FormControl(null, [Validators.required, Validators.minLength(4), this.validarConfirmacion]),
			confirmacion: new FormControl(null, Validators.required)
		})
	}

	validarCorreoEmpresarial(formControl: FormControl): { [s: string]: boolean } {
		if (formControl && formControl.value) {
			const valorCorreo = formControl.value.trim().toLowerCase()

			const dominio = valorCorreo.split("@")[1]

			if (dominio == "midominio.com") {
				return null
			}

			return { correoNoValido: true }
		}

		return null
	}

	validarConfirmacion(control: AbstractControl): { [s: string]: boolean } {
		if (!control || !control.parent) return null

		const contrasena = control.parent.get("contrasena")
		const confirmacion = control.parent.get("confirmacion")

		if (!contrasena || !confirmacion) return null

		if (confirmacion.value == "") return null

		if (contrasena.value == confirmacion.value) return null

		return { noSonIguales: true }
	}

}
