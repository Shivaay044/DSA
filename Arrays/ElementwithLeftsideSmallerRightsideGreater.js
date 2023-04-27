//Element in the middle 


function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let n = +input[0]
    let arr = input[1].split(" ").map(Number)
    ElementInTheMiddle(n,arr)
  }
  
  if (process.env.USER === "") {
    runProgram(`5
    4 3 6 7 8`);
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
  
  function ElementInTheMiddle(n,arr){
     let leftmax = new Array(n)
     let Rightmin = new Array(n)
     let max = arr[0]
     let min = arr[n-1]
     
     for(let i=0;i<n;i++){
         if(max<arr[i]){
             max = arr[i]
             leftmax[i] = arr[i]
         }else{
             leftmax[i] = max
         }
     }
     
     for(let i=n-1;i>=0;i--){
         if(min>arr[i]){
             min = arr[i]
             Rightmin[i] = arr[i]
         }else{
             Rightmin[i] = min
         }
     }
     
     for(let i=1;i<n-1;i++){
         if(arr[i]>=leftmax[i-1]&&arr[i]<=Rightmin[i+1]){
             console.log(arr[i])
             return
         }
     }
     console.log(-1)
  }
  