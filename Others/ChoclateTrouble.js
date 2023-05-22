

function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let [s,a] = input[line++].split(" ").map(Number)
        solve(s,a)
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
  
  
  function solve(s,a){
     if(s==a){
        console.log(s+a) 
        return
     }
      while(s!=a||s!=0||a!=0){
          if(s>a){
              s=s-a
          }
          else if(s<a){
              a=a-s
          }
          else{
              break;
          }
      }
      console.log(s+a)
  }
  