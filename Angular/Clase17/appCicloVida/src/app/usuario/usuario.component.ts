import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioComponent implements OnInit {

  nombreOriginal

  @Input() datosUsuario: any = {}

  constructor(private changeRef: ChangeDetectorRef) { 
    console.log("%c usuario - constructor", "color: green")
  }

  ngOnChanges(cambios: SimpleChanges){
    console.log("%c usuario - ngOnChanges", "color: green")
    console.log(cambios)
  }

  ngDoCheck(){
    console.log("%c usuario - ngDoCheck", "color: green")
    if(this.nombreOriginal != this.datosUsuario.nombre) {
      this.changeRef.markForCheck()
    }
    console.log(this.datosUsuario)
  }

  ngOnInit() {
    this.nombreOriginal = this.datosUsuario.nombre
    console.log("%c usuario - ngOnInit", "color: green")
  }

}
