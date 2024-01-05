import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-juegos', component: ListaJuegosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a 'inicio' por defecto
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } // Maneja rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
