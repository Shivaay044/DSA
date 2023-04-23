function sumOfNum(N,M,arr){
   
    let top = 0
   let bottom = N-1
   let left = 0
   let right = M-1
   
   let bag=""
   while(1){
      if(top>bottom){
          break;
      }
      for(let i=top;i<=bottom;i++){
          bag+=arr[i][left]+" "
      }
      left++
      
      if(left>right){
          break;
      }
      for(let i=left;i<=right;i++){
          bag+=arr[bottom][i]+" "
      }
      bottom-- 
      
      if(top>bottom){
          break;
      }
      for(let i=bottom;i>=top;i--){
          bag+=arr[i][right]+" "
      }
      right--
      
     if(left>right){
          break;
      }
      for(let i=right;i>=left;i--){
          bag+=arr[top][i]+" "
      }
      top++
   }
    
    console.log(bag)
  }
  
  
  function runProgram(input){
   input = input.split("\n")
   let tc = +input[0]
   let line = 1
   for(let i=0;i<tc;i++){
     let size = input[line].split(" ").map(Number)
      let N = size[0]
      let M = size[1]
      line++
      let mat = []
      for(let i=0;i<N;i++){
          mat.push(input[line].split(" ").map(Number))
          line++
      }
     sumOfNum(N,M,mat)
   }
   
  
  }