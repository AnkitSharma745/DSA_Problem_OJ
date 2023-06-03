function stringDifference(str1, str2) {
  //complete this function
  let ans=""
  for(let i=0;i<str1.length;i++){
      if(str1[i]!=str2[i]){
          ans+=str1[i]
      }
  }
  console.log(ans)
}