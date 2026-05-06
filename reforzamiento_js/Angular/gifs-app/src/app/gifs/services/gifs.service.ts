import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gifs.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const loadFromLocalStorage =  () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs
}

@Injectable({providedIn: 'root'})
export class GifService {
  private http = inject(HttpClient);
  env = environment;

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed<Gif[][]>( () => {
    const groups = [];
    while ( this.trendingGifs().length > 0 ){
      groups.push(this.trendingGifs().splice(0, 3))
    }
    return groups;
  });

  searchingGifs = signal<Gif[]>([]);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed( () => {return Object.keys(this.searchHistory())});

  constructor () {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect( () => {
    const historyString =   JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  } );

  loadTrendingGifs(page ? : number ) {
    if (this.trendingGifsLoading()) return ;

    this.trendingGifsLoading.set(true);

    console.log({page : page})
    this.http.get<GiphyResponse>(`${this.env.giphyApiURL}/gifs/trending`, {
      params : {
        api_key : this.env.giphyApiKey,
        limit : 20,
        offset : this.trendingPage() * 20,
        rating : 'g',
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update(elements => [...elements, ...gifs]);
      this.trendingGifsLoading.set(false);
      this.trendingPage.update(past => past + 1);
      // console.log(gifs);
    } );
    //siempre nos debemos de suscribir
  };


  searchGifs(query : string) : Observable<Gif[]> {
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
      } )) ),
      // tap( items => localStorage.setItem(query,JSON.stringify(items)) )
    );
    // .subscribe( (resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //   this.searchingGifs.set(gifs);
    //   console.log({search : gifs});
    // })
  }

  getHistoryGifsFromQuery(query : string) : Gif[] {
    // console.log('valor del searchhistory: ',this.searchHistory()[query]);
    return this.searchHistory()[query] ?? []
  }
}
