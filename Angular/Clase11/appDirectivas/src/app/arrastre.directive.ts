import { Directive, HostListener, EventEmitter, Output } from '@angular/core';


@Directive({
	selector: '[appArrastre]'
})
export class ArrastreDirective {

	@Output() onEncima = new EventEmitter<boolean>()
	@Output() onSeleccion = new EventEmitter<FileList>()

	constructor() { }

	@HostListener("dragover", ["$event"]) encima($event) {
		$event.preventDefault()
		this.onEncima.emit(true)
	}

	@HostListener("dragleave", ["$event"]) sale($event) {
		$event.preventDefault()
		this.onEncima.emit(false)
	}

	@HostListener("drop", ["$event"]) soltar($event) {
		$event.preventDefault()
		this.onSeleccion.emit($event.dataTransfer.files)
		this.onEncima.emit(false)
		//console.log($event)
	}

}
