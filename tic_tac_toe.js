function ticTacToe(m){
  //write code here
for(let i=0;i<3;i++){
  if(m[i][0]=="x" && m[i][1]=="x"&&m[i][2]=="x"){
      console.log("x")
      break
  }
  if(m[0][i]=="x" && m[1][i]=="x"&& m[2][i]=="x"){
      console.log("x")
      break
  }
  if(m[0][0]=="x"&&m[1][1]=="x"&&m[2][2]=="x"){
      console.log("x")
      break
  }
  if(m[2][0]=="x"&&m[1][1]=="x"&&m[0][2]=="x"){
      console.log("x")
      break
  }
  else{
      console.log("o")
      break
  }
}
}