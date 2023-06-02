function nestedReversePattern(num) {
    
  for(let row=1;row<=num;row++){
      let bag=""
      for(let colum=num;colum>0;colum--){
          bag+=colum+" "
      }
      console.log(bag)
  }
  
  
}