function minimumInArray(N,arr){
  //write code here
   let min= Infinity
  for(let i=0;i<arr.length;i++){
      if(arr[i]<min){
          min=arr[i]
      }
  }
  console.log(min)
}