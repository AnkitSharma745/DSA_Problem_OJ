function averageOfAll(n, arr){
  //write code here
  let sum=0
  for(let i=0;i<n;i++){
      sum+=arr[i]
  }
  console.log(Math.ceil(sum/arr.length))
}