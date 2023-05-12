function equalSumGame(n, A) {
  //write code here
  let sum1=0
  for(let i=0;i<n;i++){
      sum1+=A[i]
  }
  let sum2 = (sum1)/(n/2)
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
          if(A[i]+A[j]==sum2){
              console.log((i+1)+" "+(j+1))
              A[i]=0
              A[j]=0
              break
          }
      }
  }
}
