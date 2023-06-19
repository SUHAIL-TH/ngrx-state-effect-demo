import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Userstate } from "./user.reducer";

//it is a whole state
export const selectuserState = createFeatureSelector<Userstate>("userState");

//now we will get parts of state
export const selectUsers = createSelector(selectuserState, (state) => {
  return state.users;
});

//fetch loading here
export const selectLoading = createSelector(selectuserState, (state) => {
  return state.loading;
});

export const selectloaded = createSelector(selectuserState, (state) => {
  return state.loading;
});
export const selectError = createSelector(
  selectuserState,

  (state) => state.error
);
