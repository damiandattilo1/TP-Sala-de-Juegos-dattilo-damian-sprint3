import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authF: AuthService, private router: Router) { 
    if(this.authF.userCredentials == null)
    {
      this.redireccionar();


    }
  }


  redireccionar() {

    this.router.navigate(["/login"]);
  }
 
  
}
