
function runProgram(input) {
    ReduceString(input)
  }
  
  if (process.env.USER === "") {
    runProgram(`aaabccddd`);
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
  
  function  ReduceString(str){
     let st =[]
     for(let i=0;i<str.length;i++){
        if(st.length!==0&&st[st.length-1]==str[i]){
            st.pop()
        }
        else if(st[st.length-1]!==str[i]){
            st.push(str[i])
        }
         
     }
     st.length!==0?console.log(st.join("")):console.log("Empty String");
  }
  