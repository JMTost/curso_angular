import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  templateUrl: 'gift-list-item.html'
})

export class GiftListItemComponent {
  imageUrl = input.required<string>();

}
