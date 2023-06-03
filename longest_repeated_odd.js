function longestRepeatedOdd(N, array) {
  let max=0
     for(let i=0;i<N;i++){
         let arr=[]
         let count=0
         for(let j=i;j<N;j++){
             arr.push(array[j])
             if(array[i]==array[j]){
                 count++
             }
             else{
                 break
             }
             if(count>max && array[i]%2!==0){
                 max=count
             }
         }
     }
     console.log(max)
  }