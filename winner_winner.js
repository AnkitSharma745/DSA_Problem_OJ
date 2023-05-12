function winnerWinner(A,B,C,D){
  let n=A
  let s=B
  if(n>s){
      s+=C
  }
  else{
      n+=C
  }
    if(n>s){
        s+=D
    }
    
    else{
        n+=D
    }
    if(n>s){
        console.log("N")
    }
    else{
        console.log("S")
    }
    
}
