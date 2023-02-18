import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { JuegoComponent } from './components/juego/juego.component';

const routes: Routes = [
  { path: '', component: SeleccionComponent },
  { path: 'juego', component: JuegoComponent },
  { path: '*', component: SeleccionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
