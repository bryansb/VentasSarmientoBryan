import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title = 'Página de Inicio';

  products: any;

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  seeDetail(product: any){
    console.log('Se llama al detalle del producto');
    const params: NavigationExtras = {
      queryParams: {
        product
      }
    };

    this.router.navigate(['/product'], params);
  }

  checkout(){
    console.log('Se llama al checkout');
    this.router.navigate(['/shopping-cart']);
  }

}
