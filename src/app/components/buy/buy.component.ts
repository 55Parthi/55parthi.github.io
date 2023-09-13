import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

declare var Razorpay: any;

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
  
})


export class BuyComponent  implements OnInit {
  
  
  payNow(value: any) {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: (value *10), // 2000 paise = INR 20
      name: 'Parthiban',
      key: 'rzp_test_oabjw1dVTczo9F',
      image: 'https://m.media-amazon.com/images/I/61DNh9vW3vL._SX522_.jpg',
      prefill: {
        name: 'Parthiban K',
        email: 'Kparthi33@gmail.com',
        phone: '8122941026'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)

    
  }
  public products!:any[];
public grandtotal:number =0;
  constructor(private cart:CartService) { }
  ngOnInit(): void {
    this.cart.getprouduct().subscribe(res=>{
      this.products = res;
      this.grandtotal = this.cart.gettotalprice();

    })
  }
  emptycart(){
    this.cart.removeallcart();  
  }

  delete(item:any){
    this.cart.removecartitem(item)
  }
}



