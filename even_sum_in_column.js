function evenSumColumns(N,M,arr){
  for(let j=0;j<M;j++){
      let sum=0
      for(let i=0;i<N;i++){
          if(arr[i][j]%2==0){
              sum+=arr[i][j]
          }
      }
      console.log(sum)
  }
}