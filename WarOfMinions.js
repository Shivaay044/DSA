function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let n = +input[0]
    let str = input[1]
    WarOfMinions(n,str)
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
  
  function WarOfMinions(n,str){
      let stack = []
      
      for(let i=0;i<n;i++){
          if(stack.length!==0 && stack[stack.length-1]==str[i]){
              stack.pop()
          }
          else if(stack[stack.length-1]!==str[i]){
              stack.push(str[i])
          }
      }
      
     console.log(stack.join("")||-1)
  }
  