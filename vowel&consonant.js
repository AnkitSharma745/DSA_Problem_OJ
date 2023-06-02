function solve(n,str1,m,str2){
  let vowel=""
  let consonant=""
for(let i=0;i<n;i++){
  if(str1[i]=="a"||str1[i]=="e"||str1[i]=="i"||str1[i]=="o"||str1[i]=="u")
    {
          vowel+=str1[i]
    }
 }
for(let i=0;i<m;i++){
   if(str2[i]!=="a"|| str2[i]!=="e"|| sstr2[i]!=="o"|| str2!=="u"|| str2!=="i") {
      consonant+=str2[i]
   }
}  

 
  console.log(vowel+consonant)
}
function runProgram(input) {
input = input.trim().split("\n")
let tc = +input[0]
let line=1
for(let i=0;i<tc;i++){
    let n = +input[line]
    line++
    let s1= input[line]
    line++
    let m = +input[line]
    line++
    let s2= input[line]
    solve(n,s1,m,s2)
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
