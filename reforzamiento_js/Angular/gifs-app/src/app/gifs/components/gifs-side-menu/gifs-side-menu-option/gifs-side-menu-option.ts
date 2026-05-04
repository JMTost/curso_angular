import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from 'src/app/gifs/services/gifs.service';

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

  gifService = inject(GifService);
  element = Object.keys(this.gifService.searchHistory());

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
