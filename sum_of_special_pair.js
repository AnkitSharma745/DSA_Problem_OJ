function sumOfSpecialPairs(N,A){
  //write code here
let sum=0
for(let i=0;i<A.length;i++){
   for(let j=0;j<N;j++){
       if(i<j && prime(j-i)){
           sum+=Math.abs(A[i]-A[j])
         
       }
   }
}
console.log(sum)
 function prime(number){
     let count=0
     if(number==1){
         return false
     }
     else{
         
     
     for(let i=2;i<number;i++){
         if(number%i==0){
             count++
         }
     }
     if(count==0){
         return true
     }
 }
}
}