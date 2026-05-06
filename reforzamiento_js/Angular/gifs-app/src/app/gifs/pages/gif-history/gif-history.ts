import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';
import { GiftList } from "../../components/gift-list/gift-list";

@Component({
  selector: 'app-gif-history',
  imports: [GiftList],
  templateUrl : './gif-history.html'
})
export default class GifHistory {

  // query = inject(ActivatedRoute).params.subscribe( (params) => {
  //   console.log(params['query'])
  // });
  constructor (private router : Router) {
  }
  gifService = inject(GifService);
  query = toSignal(
    inject(ActivatedRoute).params
    .pipe(
      map(params => params['query'] ?? 'No tenemos query')
    )
  );
  gifs  = computed(() =>  this.gifService.getHistoryGifsFromQuery(this.query())) ;
  redirectToSearch() {
    return this.router.navigate(['/'])
  }
}
