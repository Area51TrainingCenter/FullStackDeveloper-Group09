import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

	transform(value: Array<any>, textoBuscado: string, campo: string): Array<any> {
		if (value) {
			const nuevoArreglo = value.filter(item => item[campo].toLowerCase().indexOf(textoBuscado.toLowerCase()) >= 0)

			return nuevoArreglo
		} else {
			return null
		}

	}

}
