function solve(arr){
  //Write code here
  let flag=false
  for(let i=0;i<arr.length;i++){
      if(arr[i]==42){
      flag=true
      }
      
  }
  if(flag==true){
      console.log("Yes")
  }
  else{
      console.log("No")
  }
  
  }
  
  
  
  function runprogram(input){
      input= input.trim().split("\n")
      solve(input[1].trim().split(" ").map(Number))
       
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