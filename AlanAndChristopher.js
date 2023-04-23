
function runProgram(input) {
    // Write code here
    input =input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc ;i++){
        let str = input[line++]
        AlanChristopher(str)
    }
  }
  
  if (process.env.USER === "") {
    runProgram(`2
    ab#d
    a#bc`);
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
  
  function AlanChristopher(str){
      let st = []
      for(let el of str){
          if(st.length!==0&&el=="#"){
              st.pop()
          }
          if(el!="#"){
              st.push(el)
          }
      }
      console.log(st.join(""))
  }
  