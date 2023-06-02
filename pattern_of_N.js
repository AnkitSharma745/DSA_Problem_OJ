function patternOfN(N) {
  // Write code here
  let a=1
  let bag=""
  for(let i=0;i<N;i++){
      for(let j=0;j<N;j++){
          bag+= a++ +" "
      }
      bag+="\n"
  }
  console.log(bag)
}