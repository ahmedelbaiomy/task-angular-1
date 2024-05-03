import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() products!: { "name": string; "description": string; "price": number; "image": string; }[];
  constructor() {
  }
}
