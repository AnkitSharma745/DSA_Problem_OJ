
function solve(str){
  //Write code here
  let flag=false
  for(let i=0;i<str.length;i++){
      if(str[i]=="4" && str[i+1]=="2" && str[i+2]=="0"){
          flag=true
      }
  }
  if(flag==true){
      console.log("Caught")
  }
  else{
      console.log("Escaped")
  }
  }
  
  
  function runprogram(input){
      
      solve(input)
       
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