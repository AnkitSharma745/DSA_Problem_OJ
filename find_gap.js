function findGap(N,X,arr){
    let flag="No"
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(Math.abs(arr[i]-arr[j])==Math.abs(X)){
                flag="Yes"
                break
            }
        }
    }
    console.log(flag)
}
