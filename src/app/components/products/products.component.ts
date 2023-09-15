import { Component,Input,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any=[
    {
        "description": "The main function of a CCTV camera is to capture light and convert it into a video signal",
        "id": "1",
        "image": "https://m.media-amazon.com/images/I/31Nk80-hUUL.jpg",
        "price": 2000,
        "title": "Cp security plus camera"
    },
    {
        "description": "Next best to water brewed, unsweetened Lipton Green Tea being 99. 5% water is a great way to meet your daily required fluid intake. Staying hydrated is essential to ensure bodily functions are carried out efficiently.",
        "id": "2",
        "image": "https://www.bigbasket.com/media/uploads/p/l/268915_8-lipton-pure-light-green-tea.jpg",
        "price": 500,
        "title": "Lipton Green Tea Honey Lemon, 25 Tea Bags"
    },
    {
        "description": "Redmi 12C (Royal Blue, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery",
        "id": "3",
        "image": "https://m.media-amazon.com/images/I/81itQPVn-GL._SX679_.jpg",
        "price": 8499,
        "title": "Redmi 12C"
    },
    {
        "description": "Boult Audio Z20 TWS Earbuds with 40H Playtime, Zen™ ENC Clear Calling Mic, Made in India, 10mm Rich Bass Drivers, Type-C Fast Charge, IPX5, Touch Controls, Voice Assistant, BT 5.1 Ear Buds (Green)",
        "id": "4",
        "image": "https://m.media-amazon.com/images/I/71GFeaOKepL._SX522_.jpg",
        "price": 8499,
        "title": "Boult Audio Z20"
    },
    {
        "description": "Experience the majestic powerful smartphone when you purchase the Apple iPhone 14.  The name says it all. Embraced with a beautifully aerospace-grade aluminum design and ceramic shield front, which is tougher than any other smartphone glass, giving you the holding feeling ever. Flaunt its Vibrant",
        "id": "5",
        "image": "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",
        "price": 70999,
        "title": "Apple iPhone 14 (128 GB) - Blue"
    },
    {
        "description": "Dell Vostro 3510 Laptop,Intel i5-1135G7/8GB/1TB+256GB SSD/15.6 (39.62cm)FHD TÜV Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB + FPR/Windows 11+MSO'21/15 Month McAfee/Black/1.69kg",
        "id": "6",
        "image": "https://m.media-amazon.com/images/I/614aMDyKJXL._SX679_.jpg",
        "price": 52490,
        "title": "Dell Vostro 3510"
    },
    {
        "description": "Puma, VMC Royal Co., Ltd. 22B Thanh phuoc Hamlet, Thanh dien ward, Chau Thanh district, 840000 TAY NINH PROVINCE",
        "id": "7",
        "image": "https://m.media-amazon.com/images/I/61aTaHusAqL._UY695_.jpg",
        "price": 1333,
        "title": "Puma Unisex-Adult TRC Blaze Casual Shoe"
    },
    {
        "description": "Fire-Boltt Ninja Call Pro Plus 1.83",
        "id": "8",
        "image": "https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX522_.jpg",
        "price": 1333,
        "title": "Buy this product as Renewed and save ₹225.00 from the regular price.  "
    }
];
  router: any;
  constructor(private api:ProductsService,private cart:CartService,private toastr: ToastrService) { }

  ngOnInit(): void{
      this.productlist.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price })
        // this.router.navigate(["Add to cart"]);
      
      }); 
      this.toastr.success("item has been added",'Added to cart'); 

  }

  //add to cart

  
addtocart(item:any){
this.cart.addtocart(item);
 
    console.log(item)

  }

}
