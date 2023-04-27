
function runProgram(input) {
    input = input.split("\n")
    PushPopTop(input)
  }
  
  if (process.env.USER === "") {
    runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
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
  
  function PushPopTop(input){
      let st = []
    for(let i=1;i<input.length;i++){
        let int = input[i].split(" ").map(Number)
        switch(int[0]){
        case 1:{
            st.push(int[1])
            break;
        }
        case 2:{
            if(st.length!==0){
                st.pop()
            }
            break;
        }
        case 3:{
            if(st.length===0){
                console.log("Empty!")
            }else{
                console.log(st[st.length-1])
            }
            break;
        }
      
    }
   } 
  
  }
  
  
  