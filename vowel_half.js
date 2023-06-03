function vowelHalf(N, str) {
  //write code here
   let count=0
  for(let i=0;i<str.length;i++){
      if(str[i]=="e"||str[i]=="a"||str[i]=="o"||str[i]=="i"||str[i]=="u"){
          count++
      }
  }
  if(count>str.length/2){
      console.log("True")
  }
  else{
      console.log("False")
  }
}