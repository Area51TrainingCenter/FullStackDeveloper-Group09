import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		const listadoNombres = this.activatedRoute.snapshot.data.nombreUsuario
		console.log(listadoNombres)
	}

	editar() {
		this.router.navigate(
			["/edicion", 50],
			{
				queryParams: { usuario: "Hidalgo", sexo: "masculino" },
				fragment: "Dios"
			}
		)
		//   http://localhost:4200/edicion/50?usuario=Hidalgo&sexo=masculino#Dios
	}

}
