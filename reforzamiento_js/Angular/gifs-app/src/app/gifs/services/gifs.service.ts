import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gifs.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient);
  env = environment;

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchingGifs = signal<Gif[]>([]);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed( () => {
    Object.keys(this.searchHistory())
  });

  constructor () {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${this.env.giphyApiURL}/gifs/trending`, {
      params : {
        api_key : this.env.giphyApiKey,
        limit : 20,
        offset : 0,
        rating : 'g'
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs);
    } );
    //siempre nos debemos de suscribir
  };


  searchGifs(query : string) {
    return this.http.get<GiphyResponse>(`${this.env.giphyApiURL}/gifs/search`, {
      params : {
        api_key : this.env.giphyApiKey,
        q : query,
        limit : 20,
        offset : 0,
        rating : 'g',
        lang : 'es'
      }
    }).pipe(
      map( ({data}) => data),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items) ),
      // TODO: generar historial
      tap( items => this.searchHistory.update(history => ( {
        ...history, [query.toLowerCase().trimEnd()] : items,
      } )) )
    );
    // .subscribe( (resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //   this.searchingGifs.set(gifs);
    //   console.log({search : gifs});
    // })
  }
}
