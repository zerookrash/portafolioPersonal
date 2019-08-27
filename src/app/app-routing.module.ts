import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
