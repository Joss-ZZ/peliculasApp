import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import { PopularesComponent } from './pages/populares/populares.component';
import { ValoradasComponent } from './pages/valoradas/valoradas.component';
import { ProximosComponent } from './pages/proximos/proximos.component';
import { PeliculaCardComponent } from './components/pelicula-card/pelicula-card.component';
import { PeliculaInputComponent } from './components/pelicula-input/pelicula-input.component';
import { VerPeliculaComponent } from './pages/ver-pelicula/ver-pelicula.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';




@NgModule({
  declarations: [
    PopularesComponent, 
    ValoradasComponent, 
    ProximosComponent,
    PeliculaCardComponent,
    PeliculaInputComponent,
    VerPeliculaComponent,
    ImagenesPipe
  ],
  exports: [
    PopularesComponent, 
    ValoradasComponent, 
    ProximosComponent,
    PeliculaCardComponent,
    PeliculaInputComponent
  ],
  imports: [
    CommonModule, 
    InputTextModule,
    FormsModule,
    RouterModule
  ]
})
export class PeliculasModule { }
