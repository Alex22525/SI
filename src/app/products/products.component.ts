import { Component, OnInit } from '@angular/core';
import { Product } from '../modules/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Opis 1',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price: 10.55,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Opis 2',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price: 5.55,
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Opis 3',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      price: 15.55,
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
