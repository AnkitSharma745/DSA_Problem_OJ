
obj = {
  data : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]
     

reverseArrayStrings : function() { 
        let arr = this.data
        let bag=""
        for(let i=0;i<arr.length;i++){
            tem=""
            for(let j=arr[i].length-1;j>=0;j--){
                tem+=arr[i][j]
            }
            bag+=tem+" "
        }
         // Write Code Here
         console.log(bag)
         
         
         
         // Console.log the output : the elements of array in horizontal
      },

}


