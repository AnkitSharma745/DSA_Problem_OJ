function solve(arr){
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
 
 
 function runprogram(input){
     input= input.trim().split("\n")
     let arr = input[1].split(" ").map(Number)
     solve(arr)
      
 }
 if(process.env.USER==""){
     runprogram('');
 }
 else{
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read="";
     process.stdin.on("data",function(input){
         read+=input
     });
     process.stdin.on("end",function(){
 read=read.replace(/\n$/,"");
 read=read.replace(/\n$/,"");
 runprogram(read);
     });
     process.on("SIGINT",function(){
         read=read.replace(/\n$/,"");
         runprogram(read);
         process.et(0);
     });
 }