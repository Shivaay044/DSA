
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let arr = input[line++].split(" ").map(Number)
        FindPeak(n,arr)
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
  
  function FindPeak(n,arr){
      let ans = []
      if(n==1){
          console.log(0)
          return
      }
      for(let i=0;i<n;i++){
         if(i===0&&arr[i]>arr[i+1]){
             ans.push(i)
         }
         if(i===n-1&&arr[i]>arr[i-1]){
             ans.push(i)
         }
         if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
             ans.push(i)
         }
      }
  console.log(ans[0]||-1)
  }