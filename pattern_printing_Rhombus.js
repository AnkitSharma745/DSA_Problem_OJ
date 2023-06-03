function rhombus(n) {
 
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "  ";
    }
    for (let j = 0; j < i; j++) {
      row += j + " ";
    }
    for (let j = i; j >= 0; j--) {
      row += j + " ";
    }
    console.log(row);
  }
  
  for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "  ";
    }
    for (let j = 0; j < i; j++) {
      row += j + " ";
    }
    for (let j = i; j >= 0; j--) {
      row += j + " ";
    }
    console.log(row);
  }
  
  }