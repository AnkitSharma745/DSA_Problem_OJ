function array(arr)
{
    let product=1
    for(let i=0;i<arr.length;i++){
        product*=arr[i]
    }
console.log(product)
    
}

function runProgram(input) {
  // Write code here
  input=input.trim().split("\n")
  let arr= input[1].split(" ").map(Number)
  array(arr)
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