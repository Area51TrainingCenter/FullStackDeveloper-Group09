import { Component, OnInit } from '@angular/core';
import { FloreriaService } from '../servicios/floreria.service';
import { Venta } from '../modelos/venta';

@Component({
	selector: 'app-listado-ventas',
	templateUrl: './listado-ventas.component.html',
	styleUrls: ['./listado-ventas.component.css']
})
export class ListadoVentasComponent implements OnInit {
	ventas: Array<Venta>
	total: number

	constructor(private floreriaService: FloreriaService) { }

	ngOnInit() {
		this.ventas = this.floreriaService.listar()
		this.floreriaService.onCambio.subscribe(
			ventas => {
				this.ventas = ventas
				this.sumaTotal()
			}
		)

		this.sumaTotal()
	}

	sumaTotal() {
		this.total = this.ventas.reduce((acum, venta) => acum + venta.precio, 0)
	}

}
