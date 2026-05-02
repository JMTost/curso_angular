import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballPageSuper } from './pages/dragonball-page-super/dragonball-page-super';

export const routes: Routes = [
  // aqui es donde se colocan las rutas y que componente se debe de mostrar
    // * FUNCIONALIDAD BASICA
  // ! /hola_mundo => HolaMundoComponent
  {
    path : '', component : CounterPageComponent
  },
  {
    path : 'hero', component : HeroPageComponent
  },
  {
    path : 'dragonball', component : DragonballPage
  },
  {
    path : 'dragonball-super', component : DragonballPageSuper
  },
  // !MANDAR A UN ELEMENTO CUANDO NO EXISTA LA RUTA INGRESADA
  {
    path : '**', redirectTo : ''
  }

];
