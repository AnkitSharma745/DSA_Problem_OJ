function practiceMakesUsPerfect(P1,P2,P3,P4){
    // Write Code Here
    let count=0
    let arr=[P1,P2,P3,P4]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=10){
            count++
        }
    }
    console.log(count)
}
