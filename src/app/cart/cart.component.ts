import { Component, OnInit } from '@angular/core';
import { ICart } from '../interface/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart!:ICart[];

  constructor(){}

  ngOnInit(): void {
    this.cart= JSON.parse(localStorage.getItem('cart')!);
  }


}
