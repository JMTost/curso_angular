import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DashboardPage from "./gifs/pages/dashboard-page/dashboard-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gifs-app');
}
