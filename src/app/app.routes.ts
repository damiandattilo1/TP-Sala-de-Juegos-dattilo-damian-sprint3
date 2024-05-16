import { Routes } from '@angular/router';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './mayor-omenor/mayor-omenor.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'chat', loadChildren: () => import ("./chat/chat.module").then((m) => m.ChatModule) },
    { path: 'ahorcado', component: AhorcadoComponent },
    { path: 'mayorOMenor', component: MayorOMenorComponent },
];
