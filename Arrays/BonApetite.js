function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let [n,k] = input[line++].trim().split(" ").map(Number)
        let bill = input[line++].trim().split(" ").map(Number)
        let b = +input[line++]
       bonAppetit(bill, k, b)
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
  
  
  function bonAppetit(bill, k, b) {
     let sum=0
      for(let i=0;i<bill.length;i++){
          if(i!=k){
              sum+=bill[i]
          }
      }
      
      let res =  Math.floor(sum/2)
     res>=b?console.log("Bon Appetit"):console.log(b-res)
  }
  