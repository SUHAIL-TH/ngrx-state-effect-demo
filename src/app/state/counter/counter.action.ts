import { createAction } from "@ngrx/store";

export const increment=createAction('[Counter Componet] Increment')
export const decrement=createAction('[Counter Componet] Decrement')
export const reset=createAction('[Counter Componet] Reset')