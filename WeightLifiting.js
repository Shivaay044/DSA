function solve(n,arr){
    let hsum=0; let jsum=0
     let hstep=0
     let jstep=0
    let l = 0 ; let r = n-1
    while(l<=r){
        
      hstep=0;
       while(hstep<=jstep && l<=r){
           hstep+=arr[l]
           l++
       }
       hsum+=hstep
       
       jstep=0;
       while(jstep<=hstep && l<=r){
           jstep+=arr[r]
           r--
       }
       jsum+=jstep
    }
    console.log(hsum,jsum)
  }
  
  
  function runProgram(input){
   input = input.split("\n")
   let tc = +input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let n = +input[line++]
       let arr = input[line++].split(" ").map(Number)
   
       solve(n,arr)
   } 
  }
  
  
  if (process.env.USERNAME === "") {
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