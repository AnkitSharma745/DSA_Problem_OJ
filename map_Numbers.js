function mapNumbers(N,K){
  //write code here
  let obj={}
  for(let i=1;i<=N;i++){
      obj[i]=K++
  }
  for(let key in obj){
      console.log(key+"-"+obj[key])
  }
}