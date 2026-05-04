import { Component, inject, signal } from '@angular/core';
import { GiftList } from "../../components/gift-list/gift-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifsService = inject(GifService);
  gifs = signal<Gif[]>([]);
  onSearch(query : string) {
    console.log({query})
    this.gifsService.searchGifs(query).subscribe(response => {
      this.gifs.set(response)
    });
  }
}
