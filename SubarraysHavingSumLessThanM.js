function sumOfNum(arr,n,m){
    let sum = arr[0]; let s=0; let e = 0;let c =0
    while(s<n && e<n){
        if(sum<m){
            e++
            if(e>=s){
                c = c+e-s
            }
            if(e<n){
                sum=sum+arr[e]
            }
        }
        else{
                sum=sum-arr[s]
                s++
            }
    }
    console.log(c)
 }
 
 
 function runProgram(input){
  input = input.split("\n")
  let tc = +input[0]
  let line = 1
  for(let i=0;i<tc;i++){
     let size = input[line].split(" ").map(Number)
     let n = +size[0]
     let m = +size[1]
     line++
     let arr = input[line].split(" ").map(Number)
     line++
     sumOfNum(arr,n,m)
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