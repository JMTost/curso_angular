import { AfterViewInit, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
})
export default class TrendingPage implements AfterViewInit {
  // public gifts = inject(imageUrls);
  //  urls = signal(imageUrls);

  gifsService = inject(GifService);

  scrollStateService = inject(ScrollStateService);


  gifs = computed( () => this.gifsService.trendingGifs() )

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return ;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();

  }

  onScroll(envent : Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return ;

    const scrollTop = scrollDiv.scrollTop; // cuanto hemos movido el scroll
    const clientHeight = scrollDiv.clientHeight; // total de tamaño que tiene la pantalla
    const scrollHeight = scrollDiv.scrollHeight; // total de tamaño del scroll

      // generamos un espacio o elemento de gracia para disparar la petición
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);
    let page = 0;
    console.log({isAtBottom})
    if (isAtBottom) { //siguiente pagina de gifs
      this.gifsService.loadTrendingGifs();
      // this.gifsService.trendingGifGroup().update( current => [...current, this.gifsService.trendingGifs()])
    }
    // console.log({scrollTop, clientHeight, scrollHeight, total : scrollTop + clientHeight});

  }

}
