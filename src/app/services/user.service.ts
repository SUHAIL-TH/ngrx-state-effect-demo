import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl='/api/users'
  addUser(user:user){
    return this.http.post(this.baseurl,user)
  }
  getusers(){
    return this.http.get(this.baseurl).pipe(delay(400));;
  }
  deleteuser(id:number){
    return this.http.delete(`${this.baseurl}/${id}`)
  }
  
  constructor(private http:HttpClient) { }
}
