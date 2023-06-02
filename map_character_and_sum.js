function mapCharAndSum(N,K,str) {
  // Write code here
   let obj={}
  let s="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<s.length;i++){
      obj[s[i]]= N++
  }

 let sum=0
 for(let key in obj){
     for(let i=0;i<str.length;i++){
         if(str[i]==key){
             sum+=obj[key]
         }
     }
 }
 console.log(sum)
}