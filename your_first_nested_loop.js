function yourFirstNested(num) {
  // Write code here
  for(let row=1;row<=num;row++){
      let bag=""
      for(let colum=1;colum<=num;colum++){
          bag+=colum+" "
      }
      console.log(bag)
  }
}
