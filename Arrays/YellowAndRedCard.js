function runProgram(input) {
    // Write code here
    input = input.split("\n")
    solve(input)
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
  
  function solve(input){
      let obj = {}
      
     for(let i=1;i<input.length;i++){
         let [c,x] = input[i].split(" ").map(Number)
         if(c===1){
           obj[x] = obj[x]+1 || 1
      }
      else if(c===2){
           obj[x] = obj[x]+2 || 2
      }
      else if(c===3){
          if(obj[x]==undefined){
              console.log("No")
          }else{
              if(obj[x]>=2){
                  console.log("Yes")
                  
              }else{
                  console.log("No")
              }
          }
      }
     }
  
  }
  