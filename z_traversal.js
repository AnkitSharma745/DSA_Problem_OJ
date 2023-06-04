function zTraversal(N,arr){
  let bag=""
  for(let i=0;i<N-1;i++){
      bag+=arr[0][i]+" "
  }
  for(let i=0;i<N;i++){
      for(let j=0;j<N;j++){
      if(i+j==N-1){
          bag+=arr[i][j]+" "
      }
  }
  }
  for(let i=1;i<N;i++){
      bag+=arr[N-1][i]+" "
  }
console.log(bag)
}