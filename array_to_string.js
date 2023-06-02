function solve(N,arr){
  let bag=""
 for(let i=0;i<N;i++){
     if(arr[i]<0){
         bag+= 0
     }
     else{
         bag+=arr[i]
     }
 }
 console.log(bag)
}
function runProgram(input) {
// Write code here
input = input.trim().split("\n")
let size= +input[0]
let arr= input[1].trim().split(" ").map(Number)
solve(size,arr)
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