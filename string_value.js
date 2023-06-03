function stringValue(S){
  let obj={}
let str="abcdefghijklmnopqrstuvwxyz"
for(let i=0;i<str.length;i++){
    obj[str[i]]= i+1
}

let sum=0
for(let key in obj){
    for(let i=0;i<S.length;i++){
        if(S[i]==key){
            sum+=obj[key]
        }
    }
}
console.log(sum)
}