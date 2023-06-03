function ediblePlants(N,s1,M,s2){
  let obj={}
  for(let i=0;i<N;i++){
      obj[s1[i]]=0
  }
  for(let i=0;i<M;i++){
      if(obj[s2[i]]==undefined){
          continue
      }
      else{
          obj[s2[i]]++
      }
  }
  let sum=0
  for(let key in obj){
      sum+=obj[key]
  }
  console.log(sum)
}