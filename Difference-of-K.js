function solve(n,arr,k){
  let left=0
  let right =0
  let flag="No"
  while(left<n){
      let sum = arr[right]-arr[left]
      if(sum==k){
          flag="Yes"
          break
      }
      else if(sum<k){
          right++
      }
      else{
         left++
      }
  }
  console.log(flag)
}
function runProgram(input) {
// Write code here
input= input.trim().split("\n")
let tc = +input[0]
let line=1
for(let i=0;i<tc;i++){
    let f = input[line].split(" ").map(Number)
    let n = f[0]
    let k = f[1]
    line++
    let arr = input[line].trim().split(" ").map(Number)
    line++
    solve(n,arr,k)
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
