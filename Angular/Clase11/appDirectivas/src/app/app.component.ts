import { Component } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
	[].forEach.call(this, callback)
}

//arreglo.forEach(function(elem) {})


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	conPuntos: boolean = false

	listaImagenes: Array<any> = []

	appHover: string = "cyan"

	notasPorCurso: Array<{ curso: string, nota: number }> = []

	ngOnInit() {
		this.notasPorCurso.push({ curso: "Curso01", nota: 12 })
		this.notasPorCurso.push({ curso: "Curso02", nota: 2 })
		this.notasPorCurso.push({ curso: "Curso03", nota: 20 })
		this.notasPorCurso.push({ curso: "Curso04", nota: 5 })
		this.notasPorCurso.push({ curso: "Curso05", nota: 13 })
		this.notasPorCurso.push({ curso: "Curso06", nota: 8 })
		this.notasPorCurso.push({ curso: "Curso07", nota: 19 })
		this.notasPorCurso.push({ curso: "Curso08", nota: 12 })
		this.notasPorCurso.push({ curso: "Curso09", nota: 18 })
		this.notasPorCurso.push({ curso: "Curso10", nota: 15 })
	}

	colorPorNota(nota: number): string {
		if (nota < 13) {
			return "red"
		} else if (nota < 16) {
			return "yellow"
		} else return "green"
	}

	notasAprobatorias(nota: number): string {
		return nota < 13 ? "none" : "underline"
	}

	tamanoAleatorio(): string {
		const numero = Math.random()

		return numero <= .5 ? "12px" : "20px"
	}

	clasePorNota(nota, etiquetaColor): boolean {
		switch (etiquetaColor) {
			case 'rojo':
				return nota < 13 ? true : false
			case 'amarillo':
				return (nota >= 13 && nota < 16) ? true : false
			default:
				return nota >= 16 ? true : false
		}
	}

	archivosSeleccionados(lista: FileList) {
		lista["forEach"](item => {
			if (item.type.startsWith("image/")) {
				const fr: FileReader = new FileReader()
				fr.onloadend = resultado => {
					this.listaImagenes.push((resultado.currentTarget as FileReader).result)
					//console.log((resultado.currentTarget as FileReader).result)
				}

				fr.readAsDataURL(item)
			}
		})
		//console.log(lista)
	}
}
