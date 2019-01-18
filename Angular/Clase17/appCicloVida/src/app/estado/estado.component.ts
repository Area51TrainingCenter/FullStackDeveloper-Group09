import { Component, OnInit, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @ContentChild("estado") estado: ElementRef
  @ViewChild("mensaje") mensaje: ElementRef

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log("%c estado - ngAfterContentInit", "color:blue")
    this.estado.nativeElement.innerHTML="Estado: No Logueado"
  }

  ngAfterViewInit(){
    console.log("%c estado - ngAfterViewInit", "color:blue")
    this.mensaje.nativeElement.innerHTML="Funciona"
  }

}
