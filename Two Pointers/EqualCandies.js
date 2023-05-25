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
      let l=0; let r=n-1
      let An=arr[l]; let Ak=arr[r]
      let max = 0
      let c = 2
      while(l<r){
          if(Ak==An){
              max = Math.max(max,c)
              l++
              r--
               Ak+=arr[r]
               An+=arr[l]
               c+=2
          }
          if(An>Ak){
              c++
              r--
              Ak+=arr[r]
            
          }
          if(An<Ak){
              c++
              l++
              An+=arr[l]
             
          }
      }
    console.log(max)  
  }