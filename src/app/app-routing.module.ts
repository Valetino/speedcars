import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { ModelosComponent } from './pages/modelos/modelos.component';

import { PromocionesComponent } from './pages/promociones/promociones.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'categoria/:id', component: ModelosComponent},
  { path: 'promociones', component: PromocionesComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'recomendaciones', component: RecomendacionesComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
