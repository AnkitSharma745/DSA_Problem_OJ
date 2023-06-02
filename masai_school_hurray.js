function masaiSchoolHurray(i) {
  for(let N=1;N<=i;N++){
      
  if(N%5==0 && N%7==0){
      console.log("Masai School")
  }
  else if(N%7==0) {
      console.log("Masai")
  }
  else if(N%5==0) {
      console.log("School")
  }
  else{
      console.log("Hurray!")
  }
      
  
  }
}