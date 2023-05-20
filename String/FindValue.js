
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let n = +input[0]
    let str = input[1]
    solve(n,str)
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
  
  
  function solve(n,str){
    let low = "abcdefghijklmnopqrstuvwxyz"
    let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let obj1={}
    let obj2={}
    for(let i=0;i<low.length;i++){
        obj1[low[i]] =i+1
        obj2[upp[i]] =i+1
    }
    let sum = 0
    for(let el of str){
        if(obj1[el]){
            sum+=obj1[el]
        }
        else if(obj2[el]){
            sum-=obj2[el]
        }
    }
    console.log(sum)
  }
  