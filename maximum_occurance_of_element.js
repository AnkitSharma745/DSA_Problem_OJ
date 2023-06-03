function maximumOccuringElement(A,N){
  //write code here
   let obj={}
 for(let i=0;i<N;i++){
     if(obj[A[i]]==undefined){
         obj[A[i]]=0
     }
     else{
         obj[A[i]]++
     }
 }
 
 let max= -Infinity
 let temp=""
 for(let key in obj){
     if(obj[key]>max){
         max=obj[key]
         temp=key
     }
     
 }
 console.log(temp)
}