import { createReducer, on } from "@ngrx/store";
import *as CounterAction from './counter.action'

export const initialState=0;

export const counterReducer=createReducer(
    initialState,
    on(CounterAction.increment,(state)=>state+1),
    on(CounterAction.decrement,(state)=>state-1),
    on(CounterAction.reset,(state)=>0)
)