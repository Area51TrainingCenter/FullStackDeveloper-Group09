import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

	transform(value: Array<any>, campo: string): Array<any> {
		if (value) {
			const nuevoArreglo = value.sort((a, b) => {
				if (a[campo] > b[campo]) {
					return 1
				} else {
					return -1
				}
			})
		} else {
			return null
		}



		return nuevoArreglo;
	}

}
