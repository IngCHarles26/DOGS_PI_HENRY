import { ALL_DOGS, ALL_TEMP, FILT_BREED, ORDER_BREED, ORDER_WEIGHT, NEXT_PAGE, PREV_PAGE,  CHANGE_CHK_API, CHANGE_CHK_DB,MAX_PAGE} from "./actions";

let initialState = {
  allDogs : [],
  allTemp : [],
  filtBreed : '',
  filtApi : true,
  filtDb : true,
  orderBreed : '',
  orderWeight : '',
  filteredDogsApi : [],
  filteredDogsDb : [],
  filteredDogs : [],
  currentPage : 1,
  cardsPerPage : 8,
  maxPage : 0,
}

let aux;

export default function rootReducer (state = initialState,{type,payload}){
  switch(type){
    case ALL_DOGS:
        state.allDogs = [...payload];
        state.filteredDogs = [...payload];
        state.maxPage = Math.ceil(state.filteredDogs.length/state.cardsPerPage);
        state.currentPage = state.currentPage > state.maxPage ? 1 : state.currentPage;
      return {...state};  

    case ALL_TEMP:
        state.allTemp = [...payload];
      return {...state};  
    
    case PREV_PAGE:
        state.currentPage = +state.currentPage === 1 ? state.maxPage : state.currentPage - 1;
      return {...state}

    case NEXT_PAGE:
        state.currentPage = +state.currentPage === state.maxPage ? 1 : state.currentPage + 1;
      return {...state}

    case CHANGE_CHK_API:
        state.filtApi = !state.filtApi;
      return {...state}

    case CHANGE_CHK_DB:
        state.filtDb = !state.filtDb;
      return {...state}

    case FILT_BREED:
        state.filtBreed = String(payload);
      return {...state};    

    case ORDER_BREED:
        state.orderWeight = '';
        state.orderBreed = payload;      
      return {...state};  
      
    case ORDER_WEIGHT:
        state.orderBreed = '';
        state.orderWeight = payload;
      return {...state};  
    
    case MAX_PAGE:
        state.maxPage = Math.ceil(payload/state.cardsPerPage);
        state.currentPage = state.currentPage > state.maxPage ? 1 : state.currentPage;
      return {...state};
      
    default:
      return {...state};
  }
}


/*
  dataDogs
  temperamentos
  filtrado por raza
  filtrado por api
  filtrado por DB
  ordenado por name
  ordenado por peso
  filtDataDogs
  pagina
  cards por pagina
  máximo nro de paginas
*/