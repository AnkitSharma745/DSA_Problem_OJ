function solve(n,str){
  let x =0
  let y =0
  let i=0
  while(i<n){
      if(str[i]=="L"){
          x=x-1
      }
      if(str[i]=="R"){
          x = x+1
      }
      if(str[i]=="U"){
          y = y+1
      }
      if(str[i]=="D"){
          y = y-1
      }
      i++
  }
  if(x==0 && y==0){
      console.log("Yes")
  }
  else{
      console.log("No")
  }
}
function runProgram(input) {
// Write code here
input = input.trim().split("\n")
let tc = +input[0]
let line=1
for(let i=0;i<tc;i++){
    let n  = +input[line]
    line++
    let str = input[line]
    line++
    solve(n,str)
}
}

if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}
