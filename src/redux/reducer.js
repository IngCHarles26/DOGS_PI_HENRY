import { ADD_ALL_DOGS, ADD_ALL_TEMP,CURRET_PAGE } from "./actions";

let initialState = {
  allDogs : [],
  allTemp : [],
  page:1,
}

export default function rootReducer (state = initialState,{type,payload}){
  switch(type){
    case ADD_ALL_DOGS:
      state.allDogs = [...state.allDogs,...payload];
      return {...state};
    
    case ADD_ALL_TEMP:
        state.allTemp = [...state.allTemp,...payload];
      return {...state};  
      
    case CURRET_PAGE:
        state.page = payload;
      return {...state};  

    default:
      return {...state};
  }
}