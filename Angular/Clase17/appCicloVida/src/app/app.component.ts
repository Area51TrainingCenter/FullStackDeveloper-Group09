import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:any = {nombre: "sergio"}

  _hora

  get Hora(){
    return this._hora
  }

  obtenerHora(){
    this._hora = Date.now()
  }

  constructor(){
    console.log("%c app - constructor", "color:red")
  }

  ngOnInit() {
    /* setInterval(()=>{
      this.obtenerHora()
    }, 1000) */
    console.log("%c app - ngOnInit", "color:red")
  }

  ngDoCheck() {
    console.log("%c app - ngDoCheck", "color:red")
  }

  cambiarNombre(){
    this.usuario.nombre = "Paloma"
    //this.usuario = {nombre: "Paloma"}
  }
}
