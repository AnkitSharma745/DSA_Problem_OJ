function mapChar(N) {
  // Write code here
   let obj={}
   let a=1
  let str="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<N;i++){
      obj[str[i]]= a++
  }
  for(let key in obj){
      console.log(key+"-"+obj[key])
  }
}