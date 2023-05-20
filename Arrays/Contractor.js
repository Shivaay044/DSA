
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let n = input[line++]
        let arv = input[line++].split(" ").map(Number)
        let dep = input[line++].split(" ").map(Number)
        solve(n,arv,dep)
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
  
  function solve(n,arv,dep){
    let ans = []
    for(let i=0;i<n;i++){
        if(dep[i-1]>arv[i]){
            ans.push(dep[i]-dep[i-1])
        }else{
            ans.push(dep[i]-arv[i])
        }
    }
    console.log(ans.join(" "))
  }