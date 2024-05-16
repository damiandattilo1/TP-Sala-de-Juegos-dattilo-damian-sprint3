import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { map, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  constructor(private firestore: AngularFirestore, private authS: AuthService) { }

  actualizarPuntaje(puntos: number) {
    const score = { score: puntos };
    let email: string = this.authS.userCredentials.email;
    const doc = this.firestore.collection('puntajes').doc(email);
    doc.valueChanges().pipe(
      take(1),
      map((data: any) => {
        let puntajeActual = data ? (data.score || 0) : 0;
        return puntajeActual + puntos;
      }),
      switchMap((nuevoPuntaje: number) => doc.set({ score: nuevoPuntaje }))
    ).subscribe(() => console.log("puntaje actualizado correctamente"),
      error => console.error("error al actualizar el puntaje", error)
    );
  }

  obtenerPuntajeObs(): Observable<any> {
    let email: string = this.authS.userCredentials.email;
    return this.firestore.collection("puntajes").doc(email).valueChanges();
  }

  obtenerPuntajeDoc() {
    let email: string = this.authS.userCredentials.email;
    return this.firestore.collection("puntajes").doc(email);
  }



}
