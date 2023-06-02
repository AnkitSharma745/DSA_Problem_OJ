function solve(arr){
  console.log(arr[0] + 2*arr[1] + 3*(arr[2]+arr[3]) + 2*(arr[4]+arr[5]))
}
function runProgram(input) {
// Write code her
input = input.trim().split(" ").map(Number)
solve(input)
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
