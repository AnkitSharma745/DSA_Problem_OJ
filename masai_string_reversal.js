function string(str){
  let temp=""
  for(let i=str.length-1;i>=0;i--){
      temp+=str[i]
  }
   console.log(temp)
  }
  
  
  function runprogram(input){
      string(input)
       
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