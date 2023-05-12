function playPiano(s){
  // Write Code Here
  let flag="yes"
  for(let i=0;i<s.length;i=i+2){
 
      if(s[i]==s[i+1]){
          flag="no"
          break
      }
  }
  console.log(flag)
}
