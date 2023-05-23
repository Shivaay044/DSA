function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let st = input[line++].trim().split(" ").map(Number)
        let ed = input[line++].trim().split(" ").map(Number)
       solve(n,st,ed)
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
  
  function solve(n,a,b){
      
       let res = 0
      for(let j=0; j<n; j++){
          if(j == 0){
              res += b[j] <= a[j] && 1
          } else{
              res += b[j] <= (a[j] - a[j-1]) && 1
          }
      }
      
      console.log(res)
      
      
    
  }