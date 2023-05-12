function increasing(N,A){
  let s= A.sort(function(a,b){
      return a-b
  })
  let flag="YES"
  for(let i=0;i<N;i++){
      if(A[i]>=A[i+1]){
          flag ="NO"
      }
  }
  console.log(flag)
}
