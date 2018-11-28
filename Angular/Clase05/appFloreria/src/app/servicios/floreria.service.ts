import { Injectable } from '@angular/core';
import { Venta } from '../modelos/venta';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FloreriaService {
	ventas: Array<Venta> = []

	onCambio: Subject<Array<Venta>> = new Subject()

	insertar(venta: Venta) {
		this.ventas.push(venta)
		this.onCambio.next(this.ventas)
	}

	listar() {
		return this.ventas
	}
}
