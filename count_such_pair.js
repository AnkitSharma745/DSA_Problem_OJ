function countSuchPairs(N,K,A){
  let count=0
  for(let i=0;i<N;i++){
      for(let j=i+1;j<N;j++){
          if(A[i]+A[j]==K){
              count++
          
          }
      }
  }
  console.log(count)
}