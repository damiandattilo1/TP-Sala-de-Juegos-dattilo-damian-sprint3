import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-generala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generala.component.html',
  styleUrl: './generala.component.css'
})
export class GeneralaComponent {
  
  iniciado :boolean = false;
  puntaje: number = 0;
  dados :number[] = [4,4,4,2,2];
  resultado:string = "";

  obtenerPuntaje():number{
    this.resultado = "";
    let dOrd = [...this.dados];
    dOrd.sort((a,b)=>a-b);
    if(dOrd[0] == dOrd[1] && dOrd[0] == dOrd[2] && dOrd[0]==dOrd[3] && dOrd[0] == dOrd[4]){
      this.resultado = "Generala";
      return 100;
    }
    else if(dOrd[0] == dOrd[1] && dOrd[0] == dOrd[2] && dOrd[0]== dOrd[3]){
      this.resultado = "Poker";
      return 50;
    }
    else if(dOrd[1] == dOrd[2] && dOrd[1] == dOrd[3] && dOrd[1]== dOrd[4]){
      this.resultado = "Poker";
      return 50;
    }
    else if(dOrd[0] == dOrd[1]-1 && dOrd[0]==dOrd[2]-2 && dOrd[0] == dOrd[3]-3 && dOrd[0]== dOrd[4]-4){
      this.resultado = "Escalera";
      return 45;
    }
    else if(dOrd[0] == dOrd[1] && dOrd[0] == dOrd[2] && dOrd[3] == dOrd[4]){
      this.resultado = "Full";
      return 40;
    }
    else if(dOrd[0] == dOrd[1] && dOrd[2] == dOrd[3] && dOrd[2] == dOrd[4]){
      this.resultado = "Full";
      return 40;
    }
    return 0;
  }

  tirarDados(){
    this.dados. forEach((element, index)=> {
      let nuevoValor = Math.floor(1+Math.random()*6);
      this.dados[index] = nuevoValor;
    });
  }

  nuevoJuego(){
    this.tirarDados();
    this.puntaje = this.puntaje + this.obtenerPuntaje();
    this.iniciado = true;
  }

  generala(){
    this.dados = [5,5,5,5,5];
    this.puntaje = this.puntaje + this.obtenerPuntaje();
    this.iniciado = true;
  }

  poker(){
    this.dados=[4,4,4,4,3];
    this.puntaje = this.puntaje + this.obtenerPuntaje();
    this.iniciado = true;
  }

  full(){
    this.dados=[5,5,5,1,1];
    this.puntaje = this.puntaje + this.obtenerPuntaje();
    this.iniciado = true;
  }

  escalera(){
    this.dados=[1,2,3,4,5];
    this.puntaje = this.puntaje + this.obtenerPuntaje();
    this.iniciado = true;
  }
}
