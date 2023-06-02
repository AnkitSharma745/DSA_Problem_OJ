function string(str){
  let flag=false
  for(let i=0;i<str.length;i++){
      for(let j=i+1;j<str.length;j++){
          if(str[i]==str[j]){
              flag=true
          }
      }
  }
  if(flag==true){
      console.log("No")
  }
  else{
      console.log("Unique")
  }
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