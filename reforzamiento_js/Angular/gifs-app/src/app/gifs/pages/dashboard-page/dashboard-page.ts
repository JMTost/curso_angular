import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeader } from "../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOption } from "../../components/gifs-side-menu/gifs-side-menu-option/gifs-side-menu-option";
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
