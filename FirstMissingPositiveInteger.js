
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
    runProgram(`3
    3
    1 2 0
    4
    3 4 -1 1
    5
    7 8 9 11 12`);
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
      
      
   let seen = new Set(arr)
   let i = 1
   while(seen.has(i)){
       i++
   }
   console.log(i)
  
  
  }
  