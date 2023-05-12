function Lapindromes(S){
       let obj={}
       let x = Math.floor(S.length/2)
       for(let i=0;i<S.length;i++){
           if(S.length%2!==0 && x==i){
               continue
           }
           else{
               obj[S[i]]= obj[S[i]]+1 ||1
           }
       }
for(let key in obj)
{
    if(obj[key]%2!==0){
        console.log("NO")
        return
    }
}
console.log("YES")
    
}
