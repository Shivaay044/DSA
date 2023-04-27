
function runProgram(input) {
    input = input.split("\n")
    let tc = +input[0]
    let line = 1 
    for(let i=0;i<tc;i++){
        let str = input[line++]
        ClassicalProblem(str)
    }
  }
  
  if (process.env.USER === "") {
    runProgram(`3
  {([])}
  ()
  ([]
  `);
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
  
  function ClassicalProblem(str){
      let n = str.length
      let st = []
      for(let i=0;i<n;i++){
         if(str[i]=="("||str[i]=="["||str[i]=="{"){
             st.push(str[i])
         }else {
              
             if(st.length===0){
                 console.log("not balanced")
                 return
             }
             let out = st.pop()
            if(out=="("&&(str[i]=="]"||str[i]=="}")){
                console.log("not balanced")
                return
             }
            if(out=="["&&(str[i]==")"||str[i]=="}")){
                console.log("not balanced")
                return
             }
           if(out=="{"&&(str[i]==")"||str[i]=="]")){
                console.log("not balanced")
                return
             }
         }
      }
      
      if(st.length===0){
          console.log("balanced")
      }else{
          console.log("not balanced")
      }
  }
  