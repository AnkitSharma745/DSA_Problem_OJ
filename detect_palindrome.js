function detectPalindrome(num){
  //write code here
  let str=""
  str+=num
  let bag=""
  for(let i=str.length-1;i>=0;i--){
      bag+=str[i]
  }
  if(bag==str){
      console.log("Yes")
  }
  else{
      console.log("No")
  }
  }