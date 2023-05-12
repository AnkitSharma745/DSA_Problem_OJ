
obj = {
  cart : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be availaible automatically during execution]


  // Print Total Value of the cart, if the total value is greater than or equal to 100,000 Rs customer gets a 20% discount
  totalCartValue: function(){
    // Part 1 : WRITE CODE HERE
    let sum=0
    let dis=0
  for(let i=0;i<this.cart.length;i++){
      let x = this.cart[i]
      sum+= x.price * x.quantity
  }
  if(sum>=100000){
      dis= Math.ceil((sum*20)/100)
  }
  console.log(sum-dis)
      // print or console.log() the answer
  },

  // Print the item name with highest price
  maxPriceItem : function(){
    // Part 2 : WRITE CODE HERE
  let max= 0
      let item
  for(let i=0;i<this.cart.length;i++){
      let x = this.cart[i]
      if(x.price>max){
          max=x.price
          item= x.name
      }
  }
  console.log(item)
      // print or console.log() the answer
  },
}


