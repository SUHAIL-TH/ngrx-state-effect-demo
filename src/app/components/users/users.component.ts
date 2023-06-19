import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectError, selectLoading, selectUsers, selectloaded } from 'src/app/state/user/user.selector';
import * as userActions from '../../state/user/user.action'
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  template: `
  <div *ngIf="loading$|async">
  Looding.....
  </div>

  <div class="my-2">
  <button class="btn btn-success" (click)="addUser()">Add More</button>
  </div>
 
  <ng-container *ngIf="users$|async as users" >
  <div class="py-3">
   <table class="table table-striped">
   <thead>
   <tr>
   <th>Id</th>
   <th>Name</th>
   <th>Email</th>
   <th>Action</th>
   </tr>
   </thead>
   <tbody>

   </tbody>
   <tr *ngFor="let user of users">
   <td>{{user.id}}</td>
   <td>{{user.name}}</td>
   <td>{{user.email}}</td>
   <td>
   <button class="btn btn-danger bg-danger" (click)="removeuser(user.id)">Remove</button></td>
   </tr>
   </table>
    
    </div>

  </ng-container>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit  {

  users$=this.store.select(selectUsers);

  loading$=this.store.select(selectLoading);
  loaded$=this.store.select(selectloaded);
  error$=this.store.select(selectError);




  
  constructor(private store:Store){
   
  }
  addUser(){
    const userR:user ={id:6,name:"suhail",email:"suhail@gamil.com"}
    this.store.dispatch(userActions.addUser({user :userR}))
  }
  removeuser(id: number){
    this.store.dispatch(userActions.RemoveUser({id}))
    
  }

  
  ngOnInit(): void {
   
    this.store.dispatch(userActions.loadUser());
  }

}
