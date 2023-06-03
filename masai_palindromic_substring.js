function masaiPalSubString(s){
  let   max= -Infinity
   for(let i=0;i<s.length;i++){
       let str=""
       for(let j=i;j<s.length;j++){
       str+=s[j]
         if(pal(str)>max){
             max=pal(str)
         }
     
       }
   }
console.log(max)
   function pal(char){
   let str=""
   for(let i=char.length-1;i>=0;i--){
       str+=char[i]
   }
       if(str==char){
           return char.length
       }
   }
}