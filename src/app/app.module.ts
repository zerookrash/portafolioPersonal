import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ImgComponent } from './components/img/img.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { EstudiosComponent } from './components/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CvComponent,
    ContactoComponent,
    ImgComponent,
    PortafolioComponent,
    TimelineComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
