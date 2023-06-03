function twoPrimes(a,b) {
  //write code here
function primes(number){
  let count=0
  for(let i=2;i<number;i++){
      if(number%i==0){
          count++
      }
  }
  if(count==0){
      return true
  }
}
if(primes(a) && primes(b)){
  console.log("True")
}
else{
  console.log("False")
}
}