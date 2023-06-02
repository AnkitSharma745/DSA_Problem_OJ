function totalBill(n) {
  // Write code here
  if(n<=50){
    console.log(80 + n*3)
}
else if(n>50 && n<=150){
    console.log(50*3 +80+ (n-50)*5)
}
else if(n>150){
    console.log(80+50*3+100*5+(n-150)*10)
}


}