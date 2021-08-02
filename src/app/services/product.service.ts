import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public afs: AngularFirestore) { }

  save(product: Product){
    const refContacts = this.afs.collection('products');

    if(product.uid == null){
      product.uid = this.afs.createId();
      product.active = true;
    }

    refContacts.doc(product.uid).set(Object.assign({}, product));
  }

  getProducts(): Observable<any[]> {
    return this.afs.collection('products',
            ref => ref.where('active', '==', true)).valueChanges();
  }

  getProductsInShoppingCart(): Observable<any[]> {
    return this.afs.collection('products',
            ref => ref.where('selected', '==', true)).valueChanges();
  }

}
