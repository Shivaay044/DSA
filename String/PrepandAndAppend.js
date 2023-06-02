
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line =  1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let str = input[line++]
        solve(n,str)
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
  
  
  function solve(n,str){
      let i=0
      let j=n-1
      let size = n
      while(i<j){
          if((str[i]=="0" && str[j]=="1") || (str[i]=="1" && str[j]=="0")){
            n=n-2
            i++
            j--  
          }
          else{
              break;
          }
         
      }
      console.log(n)
      
  }