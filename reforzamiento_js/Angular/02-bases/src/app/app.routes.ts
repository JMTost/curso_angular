import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  // aqui es donde se colocan las rutas y que componente se debe de mostrar
    // * FUNCIONALIDAD BASICA
  // ! /hola_mundo => HolaMundoComponent
  {
    path : '', component : CounterPageComponent
  },
  {
    path : 'hero', component : HeroPageComponent
  }

];
