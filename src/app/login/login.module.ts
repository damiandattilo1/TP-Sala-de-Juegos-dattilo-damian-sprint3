import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
    
  ],
  declarations: [],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  
})
export class LoginModule { }
