
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let str = input[line++]
        let n = str.length
        solve(n,str)
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
  
  function solve(n,str){
      let st = []
      let count=0
      for(let i=0;i<n;i++){
          while(st.length!==0&&st[st.length-1]==str[i]){
              st.pop()
              count++
          }
         if(st[st.length-1]!=str[i]){
              st.push(str[i])
          }
          
      }
      console.log(count)
  }
  