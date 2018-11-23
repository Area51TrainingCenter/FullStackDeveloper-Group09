import { Subject } from "rxjs"

export class CursoService {
	private cursos: string[] = []

	onListado = new Subject()

	salvar(data: string) {
		this.cursos.push(data)
		console.log(this.cursos)
		this.onListado.next()
	}

	eliminar(indice: number) {
		this.cursos.splice(indice, 1)
		this.onListado.next()
	}

	listar() {
		return Object.assign([], this.cursos)
	}
}