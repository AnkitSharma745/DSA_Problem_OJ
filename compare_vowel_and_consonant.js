function compareVowelsConsonants(N, str) {
  //write code here
  let vowel=0
  let consonant=0
  for(let i=0;i<str.length;i++){
      if(str[i]=="a"||str[i]=="i"||str[i]=="e"||str[i]=="o"||str[i]=="u")
{
    vowel++
}
else{
    consonant++
}
  }
  if(vowel==consonant){
      console.log("Tie")
  }
  else if(vowel>consonant){
      console.log("Vowel")
  }
  else{
      console.log("Consonant")
  }
}