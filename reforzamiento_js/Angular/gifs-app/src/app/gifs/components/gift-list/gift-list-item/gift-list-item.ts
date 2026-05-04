import { Component, input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interface';

@Component({
  selector: 'gift-list-item',
  templateUrl: 'gift-list-item.html'
})

export class GiftListItemComponent {
  imageUrl = input.required<Gif>();

}
