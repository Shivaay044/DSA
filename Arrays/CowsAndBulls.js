function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let tc = +input[0]
  let line = 1
  for(let i=0;i<tc;i++){
      let n = +input[line++]
      let s = input[line++]
      let g = input[line++]
      solve(n,s,g)
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

function solve(n,s,g){
    let c = 0; let b = 0;
    let ocurr = Array(10).fill(0)
   
   for(let i=0;i<n;i++){
       let secret = +s[i]
       let gusse = +g[i]
       
       if(gusse == secret){
           b++
           continue;
       }
       
       if(ocurr[secret]>0){
           c++
       }
       if(ocurr[secret]<0){
           c++
       }
    
       ocurr[secret]++;
       ocurr[gusse]--;
   }
}