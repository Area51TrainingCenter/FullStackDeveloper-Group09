import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { CanDeactivateInterface } from '../canDeactivate.interface';


@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, CanDeactivateInterface {
	id: number
	nombreUsuario: string
	rol: string

	constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.id = +this.activatedRoute.snapshot.paramMap.get("id")
		this.nombreUsuario = this.activatedRoute.snapshot.queryParamMap.get("usuario")
		this.rol = this.activatedRoute.snapshot.fragment

		this.activatedRoute.paramMap.subscribe(
			(parametros: any) => {
				this.id = parametros.params.id
			}
		)
	}

	canDeactivateComponent(): boolean {
		return false
	}

	irAlRegistro() {
		this.router.navigate(
			["/edicion", 100],
			{
				queryParams: { area: "sistemas" },
				queryParamsHandling: "merge"
				//preserveQueryParams: true,
				//preserveFragment: true
			}
		)
	}

}
