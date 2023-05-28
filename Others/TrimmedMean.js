function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let arr = input[line++].split(" ").map(Number)
       
    solve(n,arr)
        
    }
  }
  
  if (process.env.USER === "") {
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
  
  function solve(n,arr){
     arr.sort((a,b)=>a-b)
     let sum=0
     let c = 0
     let newArr =[]
     for(let i=n;i<(5*n-n);i++){
         c++
         newArr.push(arr[i])
     }
     
     
   for(let el of newArr){
       sum+=el
   }
   
   console.log(Math.floor(sum/c))
     
  }
  