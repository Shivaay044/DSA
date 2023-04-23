function sumOfNum(arr,n,k){
    let ws = 0 ; let h = 0
     for(let l=0;l<n;l++){
         while(ws<k&h<n){
             ws = ws + arr[h]
             h++
         }
         if(ws===k){
             console.log("Yes")
             return
         }
         else{
         ws = ws-arr[l]
         }
     }
     console.log("No")
 }
 
 
 function runProgram(input){
  input = input.split("\n")
  let tc = +input[0]
  let line = 1
  for(let i=0;i<tc;i++){
     let size = input[line].split(" ").map(Number)
     let n = +size[0]
     let k = +size[1]
     line++
     let arr = input[line].split(" ").map(Number)
     line++
     sumOfNum(arr,n,k)
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
 