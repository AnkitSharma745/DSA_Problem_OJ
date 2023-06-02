function evenArraySum(n, arr){
  //write code here
  let sum=0
  for(let i=0;i<arr.length;i++){
      if(arr[i]%2==1){
          sum+=arr[i]
      }
  }
  console.log(sum)
}