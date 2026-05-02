import { Component, input } from '@angular/core';
import { GiftListItemComponent } from "./gift-list-item/gift-list-item";

@Component({
  selector: 'gift-list-component',
  templateUrl: './gift-list.html',
  imports: [GiftListItemComponent]
})

export class GiftList {
  imageUrls = input.required<string[]>();

  // console.log('');

}
