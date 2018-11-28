import { Component, OnInit } from '@angular/core';
import { Venta } from '../modelos/venta';
import { FloreriaService } from '../servicios/floreria.service';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	venta: Venta = {}
	constructor(private floreriaService: FloreriaService) { }

	ngOnInit() {
	}

	registrarVenta() {
		if (this.venta.producto && this.venta.precio) {
			this.floreriaService.insertar(this.venta)
			this.venta = {}
		}
	}
}