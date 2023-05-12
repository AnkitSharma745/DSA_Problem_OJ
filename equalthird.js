function EqualThirds(N,A){
    let sum1=0
    let sum2=0
    let sum3=0
    for(let i=0;i<N/3;i++){
        sum1+=A[i]
    }
    for(let i=N/3;i<2*(N/3);i++){
        sum2+=A[i]
    }
   for(let i=2*(N/3);i<N;i++){
       sum3+=A[i]
   }
   if(sum1==sum2 && sum1==sum3){
       console.log("YES")
   }
   else{
       console.log("NO")
   }
}
