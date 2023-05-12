function antonAndDanik(n,s){
  // Write Code Here
  let d=0
  let a=0
  for(let i=0;i<s.length;i++){
      if(s[i]=="D"){
          d++
      }
      else if(s[i]=="A"){
          a++
      }
  }
  if(a==d){
      console.log("Friendship")
  }
  else if(a>d){
      console.log("Anton")
  }
  else  {
      console.log("Danik")
  }
}
