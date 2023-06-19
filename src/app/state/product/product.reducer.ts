import { createReducer,on } from '@ngrx/store'
import * as Productaction from '../product/product.action'
import { Product } from 'src/app/models/product.model'



export const initialState: ReadonlyArray<Product> = [];

export const productReducer=createReducer(
    initialState,
    on (Productaction.addProduct,(state,{product})=>(
         [...state,product]
    )),
    on(Productaction.removeProduct,(state,{id})=>(
        state.filter(product=>product.id!=id)
    ))
);