function oddCount(N,k,arr){
  //write code here
  let count=0
  for(let i=0;i<N;i++){
      if(i%2==0){
          if(arr[i]<=k){
              count++
          }
      }
  }
  console.log(count)
}