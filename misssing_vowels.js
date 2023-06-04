function missingVowel(N, str) {
  let obj={"a":0,"e":0,"i":0,"o":0,"u":0}
  for(let i=0;i<str.length;i++){
      obj[str[i]]++
  }
  let ans=""
  for(let key in obj){
      if(obj[key]==0){
          ans+=key
      }
  }
  if(ans==""){
      console.log(-1)
  }
  else{
  console.log(ans)
      
  }
}