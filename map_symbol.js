function mapSymbols(N) {
  // Write code here
  let obj={}
   let str="!@#$%^&*"
   for(let i=0;i<str.length;i++){
       obj[str[i]]= N
       N=N+2
   }
   for(let key in obj){
      console.log(key+"-"+obj[key])
  }
}
