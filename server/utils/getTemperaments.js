module.exports = async (data)=>{
  let ans = [];
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
