import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reducidor'
})
export class ReducidorPipe implements PipeTransform {

	transform(value: string, maxCaracteres: number, texto: string): string {
		if (value.length > maxCaracteres) {
			const valor: string = value.substr(0, maxCaracteres) + texto
			return valor;
		} else return value
	}

}
