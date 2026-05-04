import { Component, input } from '@angular/core';
import { GiftListItemComponent } from "./gift-list-item/gift-list-item";
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gift-list-component',
  templateUrl: './gift-list.html',
  imports: [GiftListItemComponent]
})

export class GiftList {
  imageUrls = input.required<Gif[]>();

  // console.log('');

}
