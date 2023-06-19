import {Injectable} from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import *as UserActions from '../user/user.action'

import { UserService } from "src/app/services/user.service"
import { catchError, map, of, switchMap } from "rxjs"
import { user } from "src/app/models/user.model"
 
@Injectable()

export class UserEffect{
   
    loadUsers$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.loadUser),
            switchMap(()=>
              this.userService.getusers().pipe(
                map(users=>UserActions.loaduserSuccess({users:users as ReadonlyArray<user>})),
                catchError((error)=>of(UserActions.loaduserFailure({error})))
              )
            )
            )
    }   
    )

    adduser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap(payload=>(
                this.userService.addUser(payload.user).pipe(
                    map(data=>UserActions.addUserSuccess({user:payload.user})),
                    catchError(error=>of(UserActions.addUserFailure({error})))
                    )
                    ))
                )
            
  
    })
    removeuser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.RemoveUser),
            switchMap(payload=>
                this.userService.deleteuser(payload.id).pipe(
                    map(data=>UserActions.RemoveUserSuccess({id:payload.id})),
                    catchError(error=>of(UserActions.RemoveUserFailure({error})))
                    )
                    )
                )
            
  
    })

    constructor(private actions$:Actions,private userService:UserService){

    }
   
}

