
function solve(size,arr){

  let sum=0
  for(let i=0;i<arr.length;i++){
      if(i%2!==0){
          sum+=arr[i]
      }
  }
  console.log(sum)
  }
  
  
  
  function runprogram(input){
      input= input.trim().split("\n")
       let size= +input[0]
      let  arr= input[1].trim().split(" ").map(Number)
      solve(size,arr)
       
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