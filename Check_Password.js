function solve(n,str){
  let     numCheck=false
  let count=0
  let charCheck=false
  let num="1234567890"
  let char="abcdefghijklmnopqrstuvwxyz"
   let i=0
   while(i<n){
       for(let j=0;j<num.length;j++){
           if(num[j]==str[i]){
               numCheck=true
               break
           }
       }
       for(let j=0;j<char.length;j++){
           if(str[i]==char[j]){
               charCheck= true
               count++
           }
       }
       i++
   }
        if(charCheck==numCheck && count>str.length/2){
            console.log("Strong")
        }      
        else{
            console.log("Weak")
        }
                             
  }
  function runProgram(input) {
    
    input = input.trim().split("\n")
    let tc = input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n = +input[line]
        line++
        let str = input[line]
        solve(n,str)
        line++
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