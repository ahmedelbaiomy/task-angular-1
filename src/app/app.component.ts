import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce-task';

  products = [
    {
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 64000,
    image:"assets/images/1.jpg"
  },
  {
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 59000,
    image:"assets/images/2.jpg"
  },
  {
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 35000,
    image:"assets/images/3.jpg"
  },
  {
    name: 'Producto 4',
    description: 'Descripción del producto 4',
    price: 42000,
    image:"assets/images/4.jpg"
  },
  {
    name: 'Producto 5',
    description: 'Descripción del producto 5',
    price: 750,
    image:"assets/images/5.jpg"
  },
  {
    name: 'Producto 6',
    description: 'Descripción del producto 6',
    price: 600,
    image:"assets/images/6.jpg"
  },
  {
    name: 'Producto 7',
    description: 'Descripción del producto 7',
    price: 8700,
    image:"assets/images/7.jpg"
  },
]

onProductCreated (productData:{name:string,description:string,price:number,image:string}){
  this.products.push(productData);
}

}
