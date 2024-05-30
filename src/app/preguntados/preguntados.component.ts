import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {


  pregunta :string = "";
  opciones :string[] = ["","","",""];
  numeroPregunta :number = 0;
  respuestaCorrecta :number = -1;
  textoResultado :string = "";
  imagenesTmp :any[] = [];
  cargado :boolean = false;
  imagenes :any[] = [];
  mensajeError :string = "";
  constructor(private imageS :ImageService){

  }

  seleccionarPregunta(){
    this.textoResultado = "";
    this.numeroPregunta = 1;
    switch(this.numeroPregunta){
      case 1:
        this.preguntaA();
        break;
      case 2:
        this.preguntaB();
        break;
      case 3:
        this.preguntaC();
        break;

    }
  }
  seleccionoRespuesta(respuesta :number){
    if(this.respuestaCorrecta == respuesta){
      this.ganaste();
    }
    else{
      this.perdiste();
    }

  }

  ganaste(){
    this.textoResultado = "Respuesta correcta";
  }
  perdiste(){
    this.textoResultado = "Respuesta incorrecta";
  }
  preguntaA(){
    let opcionSeleccionada :number = 1;
    this.pregunta = "Cual es la septima letra del abecedario";
    this.opciones = ["E", "U", "R", "G"];
    this.respuestaCorrecta = 3;
    this.cargado = false;
    let j=0;
    this.imagenesTmp = [{id: 0, url:"./assets/placeholder.jpg"}, {id: 1, url:"./assets/placeholder.jpg"}, {id: 2, url:"./assets/placeholder.jpg"}, {id: 3, url:"./assets/placeholder.jpg"}];
    console.warn(this.imagenesTmp[0].url);
    for(let i = 0; i<4;i++){ // let en vez de var

      this.imageS.obtenerImagen(i)
      //.pipe(catchError((error)=> this.handleError(error))) 
      .subscribe(response => {
        console.warn(response.urls.small);
        const imagenTmp = this.imagenesTmp[i];
        console.warn(imagenTmp);
        imagenTmp.url = response.urls.small;
        j++;
        if (j==4){
          this.imagenes = [...this.imagenesTmp]; // esta opcion en mejor
	  // this.imagenes = [];
          // for(let k=0;k<4;k++){ // let en vez de var
	  //  const imgTmp = this.imagenesTmp[k]; // en vez de i es k
          //  this.imagenes.push({id: imgTmp.id, url: imgTmp.url); // otra forma de copiar
          // }
          this.cargado = true;
        }

      },(error:any)=> {
        this.mensajeError = "ERROR al recuperar imagenes, se supero la cuota";

      }
      )
    }
  }

  preguntaB() :boolean{
    return false;
  }
  preguntaC() :boolean{
    return false;
  }
  preguntaD(){
    return false;
  }

  trackImagen(index:number, item:any){
    return item ? item.id :undefined;
    
  }

  handleError(error:any){
    this.mensajeError = "ERROR al recuperar imagenes, se supero la cuota";
    console.error(error);
    return throwError(error);
  }

}
