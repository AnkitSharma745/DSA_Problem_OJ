function solve(str){
  let left =0
  let right= str.length-1
  while(left<right){
       temp = str[left]
      str[left]=str[right]
      str[right]=temp
      left++
      right--
  }
  console.log(str.join(""))
}
function runProgram(input) {
  input = input.trim().split("\n")
  let  line=1
  let tc = +input[0]
  for(let i=0;i<tc;i++){
      str = input[line]
      solve(str.split(""))
      line++
  }
// Write code here
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
