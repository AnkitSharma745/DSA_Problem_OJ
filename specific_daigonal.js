function specificDiagonals(R, C, matrix, K){
  let r;let c
  for(let i=0;i<R;i++){
      for(let j=0;j<C;j++){
          if(matrix[i][j]==K){
              r=i
              c=j
              break
              i=R
          }
          
      }
  }
  let sum=r+c
  let diff=r-c
  let bag1=""
  let bag2=""
  for(let i=0;i<R;i++){
      for(let j=0;j<C;j++){
          if(i-j==diff){
              bag1+=matrix[i][j]+" "
          }
          if(i+j==sum){
              bag2+=matrix[i][j]+" "
          }
      }
  }
console.log(bag1)
console.log(bag2)
}