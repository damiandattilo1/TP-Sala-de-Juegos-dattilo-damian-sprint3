import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { repeat } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  letrasIncorrectas: string = "";
  palabraIngresada: string = "";
  palabraCorrecta: string = "BARCO";
  mensaje: string = "elija una letra para comenzar";
  vidas: number = 6;
  perdio :boolean = false;
  cantJugadas = 5;
  puntos: number = 0;
  palabras: string[] = ["BARCO", "AUTO", "LAPIZ", "MOUSE", "PUERTA"];

  constructor(private authF: AuthService, private router: Router) 
  {

    if (this.authF.userCredentials == null) 
    {
      this.redireccionar();


    }
    else{

      this.nuevoJuego();
    }  
    
  }
  
  redireccionar() {

    this.router.navigate(["/login"]);
  }

validarLetra(tecla: string)
{
  let valido = false;
  this.borrarGuiones();
  console.log(this.palabraIngresada);
  console.log("aca");
  let long = this.palabraIngresada.length + 1;
  let parteCorrecta = this.palabraCorrecta.substring(0, long);
  if ((this.palabraIngresada + tecla) == parteCorrecta) {
    valido = true;

  }
  if (valido) {
    this.palabraIngresada = this.palabraIngresada + tecla;
    this.mensaje = "letra correcta";
    if (this.palabraCorrecta == this.palabraIngresada) {
      this.mensaje = "Ganaste";
      this.puntos = this.puntos + 10;
      this.nuevoJuego();
    }
  }
  else {
    this.vidas = this.vidas - 1;
    this.letrasIncorrectas = this.letrasIncorrectas + tecla + " ";
    this.mensaje = "letra incorrecta " + tecla;
    if (this.vidas == 0) {
      this.mensaje = "perdiste, la palabra era " + this.palabraCorrecta;
      this.puntos = this.puntos - 10;
      this.perdio = true;
      
    }
  }

  this.mascara();
}
nuevoJuego(){
  this.perdio = false;
  this.cantJugadas--;

  this.vidas = 6;
  this.palabraIngresada = "";
  const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
  this.palabraCorrecta = this.palabras[indiceAleatorio];
  this.letrasIncorrectas = "";
  this.mascara();
}

mascara()
{
  this.borrarGuiones();
  this.palabraIngresada = this.palabraIngresada + "_".repeat(this.palabraCorrecta.length - this.palabraIngresada.length);
}
borrarGuiones()
{
  this.palabraIngresada = this.palabraIngresada.replaceAll("_", "");
  if (this.palabraIngresada == null) {
    this.palabraIngresada = "";
  }
}

}
