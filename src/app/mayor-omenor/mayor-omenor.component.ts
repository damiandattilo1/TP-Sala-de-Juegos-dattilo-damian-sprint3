import { Component } from '@angular/core';
import { PuntajeService } from '../services/puntaje.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mayor-omenor',
  standalone: true,
  imports: [],
  templateUrl: './mayor-omenor.component.html',
  styleUrl: './mayor-omenor.component.css'
})
export class MayorOMenorComponent {

  opcionIngresada :string = "";
  cartaVisible :number = Math.floor(Math.random()*10)+1;
  cartaOculta :number = Math.floor(Math.random()*10)+1;
  exito :boolean = false;
  mensaje :string = "";
  puntaje :number = 0;

  constructor(private authF: AuthService, private router: Router, private puntajeS :PuntajeService){
    if (this.authF.userCredentials == null) 
      {
        this.redireccionar();
  
  
      }
  }

  redireccionar() {

    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.puntajeS.obtenerPuntajeObs().subscribe(documento => {
      console.log(documento);
      this.puntaje = documento.score;
    });
  }


  juego(opcion :string)
  {
    this.opcionIngresada = opcion;
    if((this.opcionIngresada == "mayor" && this.cartaOculta > this.cartaVisible) ||(this.opcionIngresada == "menor" && this.cartaOculta < this.cartaVisible) )
      {
        this.exito = true;
        this.mensaje = "GANASTE";
        this.puntajeS.actualizarPuntaje(10);
      }
    else if(this.cartaOculta == this.cartaVisible){
      this.mensaje = "empate";
    }
    else{
      this.mensaje = "PERDISTE, la carta era "+ this.cartaOculta;
      this.puntajeS.actualizarPuntaje(-10);
    }
    this.juegoNuevo();
  }

  juegoNuevo()
  {
    this.exito = false;
    this.cartaOculta = Math.floor(Math.random()*10)+1;
    this.cartaVisible = Math.floor(Math.random()*10)+1;
  }
}
