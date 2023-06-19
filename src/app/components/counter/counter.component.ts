import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterAction from 'src/app/state/counter/counter.action';

@Component({
  selector: 'app-counter',
  template: `
    counter:{{counter$ |async}}
    <br/>
    <button class="btn btn-dark" (click)="increment()">INCREMENT</button>
    <button class="btn btn-danger"  (click)="decrement()">Decrement</button>
    <button  class="btn btn-primary"  (click)="reset()">Reset</button>

  `,
  styles: [
  ]
})
export class CounterComponent {
  counter$:Observable<number>=this.store.select('counter') //selector
  increment(){
    this.store.dispatch(CounterAction.increment())
  }
  decrement(){
    this.store.dispatch(CounterAction.decrement())
  }
  reset(){
    this.store.dispatch(CounterAction.reset())
  }
   constructor(private store:Store<{counter:number}>){

   }
}
