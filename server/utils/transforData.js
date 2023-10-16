const urlImage = 'https://cdn2.thedogapi.com/images/'

const transformDataApi = (data,temperaments) =>{
  if(data && Object.keys(data).length){
      const {id,name,reference_image_id} = data;
      const image = reference_image_id 
        ? urlImage+data.reference_image_id+'.jpg'
        : data.image.url || 'noHave';
      const height = data.height.metric.replaceAll(' ','');
      const weight = data.weight.metric.replaceAll(' ','');
      const yearsLife = data.life_span.replaceAll(' ','').replaceAll('years','')
      const origin = 'API';
      const temperament = data.temperament
        ? data.temperament.replaceAll(' ','').split(',').map(el=>temperaments[el]) 
        : [temperaments[data.temperament]];
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

  module.exports = {
    transformDataApi,
    transformDataDB
  };