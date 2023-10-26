//Agregar todos los perros y los perros filtrados
  export const ALL_DOGS = 'ALL_DOGS';
  export const allDogs = (data)=>{return{type:ALL_DOGS,payload:data}} ;
//Agregar todos los temperamentos
  export const ALL_TEMP = 'ALL_TEMP';
  export const allTemp = (data)=>{return{type:ALL_TEMP,payload:data}} ;
//Filtrar todos los perros por nombre de raza
  export const FILT_BREED = 'FILT_BREED';
  export const filtBreed = (data)=>{return{type:FILT_BREED,payload:data}};
//Filtrar todos los perros por nombre de raza
  export const FILT_TEMP = 'FILT_TEMP';
  export const filtTemp = (data)=>{return{type:FILT_TEMP,payload:data}};
//Filtrar todos los perros de origen API
  export const FILT_API = 'FILT_API'
  export const filtApi = (data)=>{return{type:FILT_API,payload:data}};
//Filtrar todos los perros de origen base de datos
  export const FILT_DB = 'FILT_DB'
  export const filtDb = (data)=>{return{type:FILT_DB,payload:data}};
//Ordenar todos los perros filtrados por raza
  export const ORDER_BREED = 'ORDER_BREED';
  export const orderByBreed = (data)=>{return{type:ORDER_BREED,payload:data}};
//Ordenar todos los perros filtrados por peso
  export const ORDER_WEIGHT = 'ORDER_WEIGHT'
  export const orderByWeight = (data)=>{return{type:ORDER_WEIGHT,payload:data}};
//Mover a la siguiente pagina
  export const NEXT_PAGE = 'NEXT_PAGE';
  export const nextPage = () => {return {type:NEXT_PAGE}};
//Mover a la pagina anterior
  export const PREV_PAGE = 'PREV_PAGE';
  export const prevPage = () => {return {type:PREV_PAGE}};
//Cambiar el el check de API
  export const CHANGE_CHK_API = 'CHANGE_CHK_API';
  export const changeCheckApi = ()=>{return {type:CHANGE_CHK_API}};
//Cambiar el el check de DATA BASE
  export const CHANGE_CHK_DB = 'CHANGE_CHK_DB';
  export const changeCheckDb = ()=>{return {type:CHANGE_CHK_DB}};
//Ordenar segun lo requerido
  export const ORDER = 'ORDER';
  export const orderDogs = (data)=>{return{type:ORDER,payload:data}}
//Setear la máxima página
  export const MAX_PAGE = 'MAX_PAGE';
  export const maxPage = (data)=>{return{type:MAX_PAGE,payload:data}}
//Añadir un dog
  export const ADD_DOG = 'ADD_DOG';
  export const addDog = (data)=>{return{type:ADD_DOG,payload:data}}

//Setear las páginas máximas
  // export const MAX_PAGES = 'MAX_PAGES';
  // export const maxPages = (data) => {return {type:MAX_PAGES,payload:data}};


