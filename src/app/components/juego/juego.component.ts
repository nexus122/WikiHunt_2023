import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  valorInput!: string;

  constructor(private router: Router){}

  construirRuta(){
    const ruta = '/juego/'+this.valorInput;
    this.router.navigateByUrl(ruta);
  }
}
