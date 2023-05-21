import { Component ,  OnInit } from '@angular/core';
import { IProduct } from './interface/product.interface';
import { ICart } from './interface/cart.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tienda_Virtual'; 
  products: IProduct[] =[];
  cart:ICart[] =[];
  show:boolean = false;
  
  
  constructor(){     
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
            
    
  }

  ngOnInit(){
    this.products =[
      {id:0 , name:"Coca cola" , description:"Coca-Cola es la bebida más vendida en la historia desde 1886. Es la marca más famosa del mundo. " , price:2 , img:""},
      {id:1 , name:"SIDRAL LIGHT MUNDET" , description:"Desde hace 115 años es el refresco de origen mexicano elaborado con 1% de jugo de manzana pasteurizado. " , price:5 , img:""},
      {id:2 , name:"FANTA ZERO" , description:"Fanta Zero es una versión sin calorías y baja en sodio que ofrece hidratación con el mismo sabor natural." , price:6 , img:""},
      {id:3 , name:"Coca cola" , description:"Coca-Cola es la bebida más vendida en la historia desde 1886. Es la marca más famosa del mundo. " , price:2 , img:""},
      {id:4 , name:"SIDRAL LIGHT MUNDET" , description:"Desde hace 115 años es el refresco de origen mexicano elaborado con 1% de jugo de manzana pasteurizado. " , price:5 , img:""},
      {id:5 , name:"FANTA ZERO" , description:"Fanta Zero es una versión sin calorías y baja en sodio que ofrece hidratación con el mismo sabor natural." , price:6 , img:""},
    ];
    

  }
  toooglecart(){
    this.show = !this.show;
  }
  

}
