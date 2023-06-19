import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { productState } from 'src/app/state/product/product.selector';

import *as Productaction from  '../../state/product/product.action'
@Component({
  selector: 'app-product',
  template: `
  <button class="btn btn-success my-3 mt-5" (click)="addproduct()" >add</button>

  <ng-container *ngIf="products$|async as products">
    <div class="py-3">
   <table class="table table-striped">
   <thead>
   <tr>
   <th>Id</th>
   <th>Name</th>
   <th>Price</th>
   <th>Action</th>
   </tr>
   </thead>
   <tbody>

   </tbody>
   <tr *ngFor="let product of products">
   <td>{{product.id}}</td>
   <td>{{product.name}}</td>
   <td>{{product.price}}</td>
   <td>
   <button class="btn btn-danger" (click)="removeProduct(product.id)">Remove</button></td>
   </tr>
   </table>
    
    </div>
    </ng-container>
  `,
  styles: [
  ]
})
export class ProductComponent {
  products$=this.store.select(productState)
  addproduct(){
    const rnd=Date.now().toString();
    const product:Product={
      id:rnd,
      name:'product'+rnd,
      price:490


    }
    this.store.dispatch(Productaction.addProduct({product}))
  }
  removeProduct(id:string){
    this.store.dispatch(Productaction.removeProduct({id}))

  }
  

  constructor(private store:Store<{products:ReadonlyArray<Product>}>){

  }

}
