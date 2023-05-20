function runProgram(input) {
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
    let res = []
    for(let i=0;i<n;i++){
         let flag = false
        for(let j=i+1;j<n;j++){
           if(arr[i]>=arr[j]){
               flag= true
               res.push(arr[i]-arr[j])
               break;
           }
        }
        if(flag==false){
          res.push(arr[i])  
        }
    }
    console.log(res.join(" ")) 
  }
  