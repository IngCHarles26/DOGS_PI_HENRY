import { ADD_ALL_DOGS } from "./actions";

let initialState = {
  allDogs : [],
}

export default function rootReducer (state = initialState,{type,payload}){
  switch(type){
    case ADD_ALL_DOGS:
      state.allDogs = [...state.allDogs,...payload];
      return {...state};
      
    default:
      return {...state};
  }
}