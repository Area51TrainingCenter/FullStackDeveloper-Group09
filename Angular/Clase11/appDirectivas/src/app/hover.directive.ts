import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
	selector: '[appHover]'
})
export class HoverDirective {

	@Input() colorPorDefecto: string = "white"
	@Input() colorHover: string = "orange"
	@Input() appHover: string

	constructor(private elem: ElementRef) { }

	@HostListener("mouseenter") encima() {
		this.elem.nativeElement.style.backgroundColor = this.colorHover
	}

	@HostListener("mouseleave") fuera() {
		this.elem.nativeElement.style.backgroundColor = this.appHover//this.colorPorDefecto
	}

}
