function smallestAndLargestOfAll(n, arr){
  //write code here
  let max= -Infinity
let min = Infinity
for(let i=0;i<arr.length;i++){
   if(arr[i]>max){
       max=arr[i]
   }
   if(arr[i]<min){
       min=arr[i]
   }
}
console.log(min)
console.log(max)

  
}