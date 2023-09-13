import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any;
  router: any;
  constructor(private api:ProductsService,private cart:CartService,private toastr: ToastrService) { }

  ngOnInit(): void{
    this.api.getproduct().subscribe(res=>{
      // console.log(res);
      this.productlist =res
      this.productlist.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price })
        // this.router.navigate(["Add to cart"]);
      
      }); 
      this.toastr.success("item has been added",'Added to cart'); 
});
  }

  //add to cart

  
addtocart(item:any){
this.cart.addtocart(item);
 
    console.log(item)

  }

}
