function goodBadStr(str) {
  //write code here
  let bag=""
  for(let i=0;i<str.length;i++){
      if(str[i]!==str[i+1]){
          bag+=str[i]
      }
  }
  console.log(bag)
}