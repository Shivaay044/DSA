function runProgram(input) {
    input = input.split("\n")
    let tc = +input[0]
    let line =  1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let push = input[line++].split(" ").map(Number)
        let pop = input[line++].split(" ").map(Number)
    
        ValidStackSequence(n,push,pop)
    }
  }
  
  if (process.env.USER === "") {
    runProgram(`2
  5
  1 2 3 4 5
  4 5 3 2 1
  5
  1 2 3 4 5
  4 3 5 1 2`);
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
  
  function ValidStackSequence(n,push,pop){
      let st = []
      let i=0
      for(let el of push){
          st.push(el)
          while(st.length!==0&&st[st.length-1]==pop[i]){
              st.pop()
              i++
          }
      }
      st.length===0?console.log("YES"):console.log("NO");
  }