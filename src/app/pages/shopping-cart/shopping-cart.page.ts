import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/services/product.service';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  products: any;

  title = 'Productos Agregados';

  constructor(private router: Router,
              private productService: ProductService,
              private callNumber: CallNumber) { }

  ngOnInit() {
    this.products = this.productService.getProductsInShoppingCart();
  }

  callStore(){
    console.log('Se llama al local');
    this.callNumber.callNumber("0996917211", false)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  removeFromShoppingCart(product: any){
    product.selected = false;
    this.productService.save(product);
    console.log('Se remueve del carrito');
  }

}
