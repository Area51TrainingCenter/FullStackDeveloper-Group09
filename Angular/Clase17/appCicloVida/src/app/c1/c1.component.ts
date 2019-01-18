import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  suscripcion:Subscription

  constructor() { }

  ngOnInit() {
    this.suscripcion = interval(1000)
      .subscribe(
        data => console.log(data)
      )
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe()
  }

}
