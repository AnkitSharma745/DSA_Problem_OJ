function atillasProblem(n,str){
  let obj={}
  let char="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<char.length;i++){
      obj[char[i]]= i+1
  }
  let arr=[]
  
  for(let key in obj){
  for(let i=0;i<n;i++){
      if(str[i]==key){
          arr.push(obj[key])
      }
  }    
  }
  let max= -Infinity
  for(let i=0;i<arr.length;i++){
      if(arr[i]>max){
          max=arr[i]
      }
  }
  console.log(max)
}
