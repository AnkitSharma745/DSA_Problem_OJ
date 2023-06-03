function partyPlanning(N,PamID,M,JimID){
  let obj={}
  for(let i=0;i<N;i++){
      obj[PamID[i]]=1
  }
 let obj1={}
 for(let i=0;i<M;i++){
     obj1[JimID[i]]=1
 }
 let pam=""
 for( let key in obj){
     pam+=key
 }
 let jim=""
 for(let key in obj1){
     jim+=key
 }
 if(pam==jim){
     console.log("Yes")
 }
 else{
     console.log("No")
 }
}
