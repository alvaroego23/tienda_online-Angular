import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interface/product.interface';
import { ICart } from '../interface/cart.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  cart: ICart[] = [];


  constructor() {

  }

  ngOnInit() {
  }
  //adicionar al carrito
  Add(): void {
    let bandera: Boolean = false;
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    if (this.cart.length > 0) {
      this.cart.forEach(item => {
        if (item.id === this.product.id) {
          item.quantity = item.quantity + 1;
          bandera = true;
          return;
        }
      });
    }
    if (bandera === false) {
      this.cart.push({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1 });

    }
    localStorage.setItem('cart', JSON.stringify(this.cart));

  }

}
