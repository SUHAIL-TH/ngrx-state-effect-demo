import {  createReducer, on } from "@ngrx/store";
import { user } from "src/app/models/user.model";
import * as userAction from '../user/user.action'


export interface Userstate{
    users:ReadonlyArray<user>,
    loading:boolean,
    loaded:boolean,
    error:any
}

export const initalState:Userstate={
    users:[],
    loading:false,
    loaded:false,
    error:null
}
export const userReducer=createReducer(
    initalState,
    on(userAction.loadUser,(state)=>(
        {...state,loading:true}
    )),
    on(userAction.loaduserSuccess,(state,{users})=>(
        {...state,loading:false,loaded:true,users}
    )),
    on(userAction.loaduserFailure,(state,{error})=>(
        {...state,loading:false,error}
    )),
    on(userAction.addUser,(state,{user})=>(
        {...state,loading:true,loaded:false} //users[] will not modified here
    )),
    on(userAction.addUserSuccess,(state,{user})=>(
        {...state,loading:true,loaded:true,users:[...state.users,user]} //users array is modifired here 
    )),
    on(userAction.addUserFailure,(state,{error})=>(
        {...state,loading:false,loaded:false,error} 
    )),
    on(userAction.RemoveUser,(state,{id})=>(
        {...state,loading:true,loaded:false} 
    )),
    on(userAction.RemoveUser,(state,{id})=>(
        {...state,loading:false,loaded:false,
        users:state.users.filter(a=>a.id!==id)} 
    )),
    on(userAction.RemoveUserFailure,(state,{error})=>(
        {...state,loaded:false,loading:false,error}
    ))
    
)