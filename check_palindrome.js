function checkPalindrome(N, str) {
  //write code here
let s=""
for(let i=N-1;i>=0;i--){
    s+=str[i]
}
if(str==s){
    console.log("Yes")
}
else{
    console.log("No")
}
}