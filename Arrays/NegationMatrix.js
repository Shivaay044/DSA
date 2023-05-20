
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let [n,m] = input[0].split(" ").map(Number)
     let mat = []
     let line = 1 
    for(let i=0;i<n;i++){
       mat.push(input[line++].split(" ").map(Number))
    }
    solve(n,m,mat)
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
  
  function solve(n,m,mat){
      let sum = 0
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            sum+=mat[i][j]
        }
    }  
  
  for(let i=0;i<n;i++){
      let bag=""
        for(let j=0;j<m;j++){
            bag+= sum-mat[i][j]+" "
        }
        console.log(bag)
    }
  }