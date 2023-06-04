function maximumOccuringElement(A,N){
  let obj={}
  for(let i=0;i<N;i++){
      if(obj[A[i]]==undefined){
          obj[A[i]]=1
      }
      else{
          obj[A[i]]++
      }
  }
  let temp=""
  let max= -Infinity
  for(let key in obj){
      if(obj[key]>max){
          max=obj[key]
          temp=key
      }
  }
  console.log(temp)
     
     
     
     
     
 }