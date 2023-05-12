function countTransformation(A,B){
  let count = 0;
    while (A !== B) {
      if (A > B) {
        A -= B;
      } else {
        B -= A;
      }
      count++;
    }
    console.log(count)
  
  }
  