function subStrUnderCond(s){
  //write code here
  let count=0
  for(let i=0;i<s.length;i++){
      let str=""
      for(let j=i;j<s.length;j++){
          str+=s[j]
          if(str[0]==str[str.length-1]){
              count++
          }
      }
  }
  console.log(count)
  }