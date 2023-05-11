//image url => https://ibb.co/8g02SVL

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
      let i = 0;
      let jump = 0
      while(i<n){
          if(arr[i+2]===0){
              jump++
              i+=2
          }
          else if(arr[i+1]===0){
              jump++
              i+=1
          }else{
              i++
          }
      }
      console.log(jump)
  }
  