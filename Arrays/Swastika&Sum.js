function sum(n,m,arr){
    let sum1 = 0
    let i = (n-1)/2
    for(let j=0;j<m;j++){
        sum1+=arr[i][j]
    }
    
    j=0
    for(let k=0;k<i;k++){
        sum1+=arr[k][j]
    }
    
    j=m-1
    for(let k=i+1;k<n;k++){
        sum1+=arr[k][j]
    }
    
    let sum2 = 0
    j=(m-1)/2
    for(let i=0;i<n;i++){
      sum2+=arr[i][j]  
    }
    
    i= n-1
    for(let k=0;k<j;k++){
       sum2+=arr[i][k] 
    }
    
      i= 0
    for(let k=j+1;k<m;k++){
       sum2+=arr[i][k] 
    }
    
    console.log(Math.abs(sum1-sum2))
  }
  
  
  function runProgram(input){
   input = input.split('\n')
   let rc = input[0].split(" ").map(Number)
   let n = rc[0]
   let m = rc[1]
   let line = 1
   let arr=[]
   for(let i=0;i<n;i++){
       arr.push(input[line].split(" ").map(Number))
       line++
   }
   sum(n,m,arr)
  }
  
  
  if (process.env.USERNAME === "") {
       runProgram(``);
   } else {
       process.stdin.resume();
       process.stdin.setEncoding("ascii");
       let read = "";
       process.stdin.on("data", function (input) {
           read += input;
       });
       process.stdin.on("end", function () {
           read = read.replace(/\n$/, "");
           read = read.replace(/\n$/, "");
           runProgram(read);
       });
       process.on("SIGINT", function () {
           read = read.replace(/\n$/, "");
           runProgram(read);
           process.exit(0);
       });
   }