import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
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
