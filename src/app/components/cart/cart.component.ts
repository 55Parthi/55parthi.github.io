import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {


  
public products!:any[];
public grandtotal:number =0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getprouduct().subscribe(res=>{
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();

    })

  }


}




