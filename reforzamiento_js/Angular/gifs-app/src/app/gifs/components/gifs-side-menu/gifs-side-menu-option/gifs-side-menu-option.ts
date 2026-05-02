import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  label : string,
  sublabel : string,
  route : string,
  icon : string
};

@Component({
  selector: 'gifs-side-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-option.html',
})
export class GifsSideMenuOption {
  menuOptions : MenuOption[] = [
    {
      icon : 'fa-solid fa-chart-line',
      label : 'Trending',
      sublabel : 'Gifs populares',
      route : '/dashboard/trending'
    },
    {
      icon : 'fa-solid fa-magnifying-glass',
      label : 'Buscador',
      sublabel : 'Buscar Gifs',
      route : '/dashboard/search'
    }
  ];

}
