function appearOnce(N, arr) {
  //write code here
   let obj={}
  for(let i=0;i<N;i++){
     if (obj[arr[i]]==undefined){
         obj[arr[i]]=1
     }
     else{
        obj[arr[i]]++
     }
  }
  let sum=0
  for(let key in obj){
      if(obj[key]==1){
          sum+= +key
      }
  }
  console.log(sum)
}