import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://api.unsplash.com/photos/random';
  private apiKey = 'O9bg6jLT_TW5WPhH517tdwEr-jbhEqaihrOQgzAqq3M';
  constructor(private http: HttpClient) {
    
  }

  obtenerImagen(codigo :number) :Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?client_id=${this.apiKey}`);

    
  }
}
