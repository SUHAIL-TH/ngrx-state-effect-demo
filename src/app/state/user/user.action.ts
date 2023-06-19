//loaduser,loaduserfailer,loaduserfailer
//adduser,addusersuccess,adduserfailer 
//same for remove user

import { createAction, props } from "@ngrx/store"
import { user } from "src/app/models/user.model"

export const loadUser=createAction('[User component] Load User')
export const loaduserSuccess=createAction('[User Component] Load User Sucess ',props<{users:readonly user[]}>())
export const loaduserFailure=createAction('[User Component] Load User Failure ',props<{error:any}>())

export const addUser=createAction('[User component] Add User',props<{user:user}>())
export const addUserSuccess=createAction('[User component] Add User Success',props<{user:user}>())
export const addUserFailure=createAction('[User component] Add User Failure',props<{error:any}>())

export const RemoveUser=createAction('[User component] Remove User',props<{id:number}>())
export const RemoveUserSuccess=createAction('[User component] Remove User Sucess',props<{id:number}>())
export const RemoveUserFailure=createAction('[User component] Remove User Failure',props<{error:any}>())


