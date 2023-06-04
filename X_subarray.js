function Xsubarrays(n,k,X,arr){
  let count=0
  let left =0
  let right =0
  while(right<n){
      if(arr[right]<=k){
          if(right-left+1 ==X){
              count++
              left++
          }
          right++
      }
      else{
          left = right = right+1
      }
  }
  
 console.log(count)
}
