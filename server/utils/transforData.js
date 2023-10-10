const urlImage = 'https://cdn2.thedogapi.com/images/'

const transformDataApi = (data,temperaments) =>{
  if(data && Object.keys(data).length){
      const {id,name,reference_image_id} = data;
      const image = reference_image_id 
        ? urlImage+data.reference_image_id+'.jpg'
        : data.image.url;
      const height = data.height.metric.replaceAll(' ','');
      const weight = data.weight.metric.replaceAll(' ','');
      const yearsLife = data.life_span.replaceAll(' ','').replaceAll('years','')
      const origin = 'API';
      const temperament = data.temperament 
        ? data.temperament.replaceAll(' ','').split(',').map(el=>temperaments[el]) 
        : temperaments[data.temperament];
    return {id,image,name,height,weight,yearsLife,origin,temperament};
  }
}

const transformDataDB = (data)=>{
  if(data && Object.keys(data).length){
    const {id,image,name,height,weight,yearsLife} = data;
    const origin = 'DB';
    const temperament = data.Temperaments.map(el=>el.id);
    return {id,image,name,height,weight,yearsLife,origin,temperament};
  }
}


// {
//   "weight": {
//   "imperial": "65 - 100",
//   "metric": "29 - 45"
//   },
//   "height": {
//   "imperial": "23 - 25",
//   "metric": "58 - 64"
//   },
//   "id": 9,
//   "name": "Alaskan Malamute",
//   "bred_for": "Hauling heavy freight, Sled pulling",
//   "breed_group": "Working",
//   "life_span": "12 - 15 years",
//   "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
//   "reference_image_id": "dW5UucTIW",
//   "image": {
//   "id": "dW5UucTIW",
//   "width": 1023,
//   "height": 769,
//   "url": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
//   }
// }

// {
//   "id": 307974501,
//   "image": "D:/DESARROLLO WEB/HENRY/DOGS_PROJECT/photos/pe1.jpg",
//   "name": "Toby",
//   "height": "5-10",
//   "weight": "28-40",
//   "yearsLife": "10-15",
//   "origin": "BD",
//   "temperament": [
  //     2,
  //     4,
  //     6
  //   ]
  // },
  
  module.exports = {
    transformDataApi,
    transformDataDB
  };