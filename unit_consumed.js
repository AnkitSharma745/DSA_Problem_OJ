function unitsConsumed(n) {
   
  if(n>=0 && n<=230){
      console.log((n-80)/3)
  }
  else if(n>230 && n<=730){
      console.log(50+(n-230)/5)
  }
  else if(n>730){
      console.log(50+100+(n-730)/10)
  }
   
}