function TwoArrayOneSum(N,A,B) {
  //write code here
  let sum=0
  for(let i=0;i<N;i++){
      sum+=A[i]
      sum+=B[i]
  }
  console.log(sum)
}