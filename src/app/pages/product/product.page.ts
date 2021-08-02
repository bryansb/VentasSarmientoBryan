import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product: Product = new Product();

  constructor(private router: Router, private route: ActivatedRoute,
              private productService: ProductService) {

    route.queryParams.subscribe(params => {
      console.log(params);
      this.product = new Product();
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.product = this.router.getCurrentNavigation().extras.queryParams.product;
      }
    });
  }

  ngOnInit() {
  }

  addToShoppingCart(){
    this.product.uid = this.product.uid;
    this.product.selected = true;
    this.productService.save(this.product);
    this.router.navigate(['/home']);
    console.log('Se agrega al carrito');
  }

}
