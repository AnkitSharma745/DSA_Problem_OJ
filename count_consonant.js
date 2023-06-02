function string(str){
    
  let count=0
  for(let i=0;i<str.length;i++){
      if(str[i]=="a" ||str[i]=="e" ||str[i]=="i" ||str[i]=="o" ||str[i]=="u" )
          {
              count++
          }
  }
console.log(str.length - count)

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