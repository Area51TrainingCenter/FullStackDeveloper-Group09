import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[basica]"
})
export class BasicaDirective {

	constructor(private elem: ElementRef) { }

	ngOnInit() {
		this.elem.nativeElement.style = "background-color: yellow"
	}
}