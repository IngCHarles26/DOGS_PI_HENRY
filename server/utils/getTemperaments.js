module.exports = (data)=>{
  let ans = ['undefined','Mellow', 'Enterprising', 'Serious', 'Gregarious', 'Nonaggressive', 'Optimistic', 'Robust', 'Engaging', 'Intense', 'Dependable', 'Discerning', 'Noble', 'Perceptive', 'Instinctual', 'Quarrelsome', 'Impetuous', 'HuntingInstinct', 'Dedicated', 'Versatile'];
  try{
    for(let i of data){
      let {temperament} = i;
      if(temperament){
        temperament = temperament.replaceAll(' ','').split(',');
        for(let j of temperament){
          if(!ans.includes(j)) ans.push(j);
        }
      }
    }
    return ans.map(el=>{return {name:el}});
  }catch(err){
    console.log({message:err.message})
  }
}
