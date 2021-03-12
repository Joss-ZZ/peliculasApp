import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularesComponent } from './peliculas/pages/populares/populares.component';
import { ValoradasComponent } from './peliculas/pages/valoradas/valoradas.component';
import { ProximosComponent } from './peliculas/pages/proximos/proximos.component';
import { VerPeliculaComponent } from './peliculas/pages/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
    {
        path: '',
        component: PopularesComponent,
        pathMatch: 'full'
    },
    {
        path: 'mas-valoradas',
        component: ValoradasComponent
    },
    {
        path: 'proximos-estrenos',
        component: ProximosComponent
    },
    {
        path: 'pelicula/:id',
        component: VerPeliculaComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }