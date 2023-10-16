export const ADD_ALL_DOGS = 'ADD_ALL_DOGS';
export const ADD_ALL_TEMP = 'ADD_ALL_TEMP';
export const CURRET_PAGE = 'CURRET_PAGE';


export const addAllDogs = (data) => {return {type:ADD_ALL_DOGS,payload:data}};
export const addAllTemp = (data) => {return {type:ADD_ALL_TEMP,payload:data}};
export const currentPage = (data) => {return {type:CURRET_PAGE,payload:data}};