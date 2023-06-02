function mapCharAgain(N) {
  // Write code here
   let obj={}
  let str="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<str.length;i++){
      obj[str[i]]= N++
  }
  for(let key in obj){
      console.log(key+"-"+obj[key])
  }
}
