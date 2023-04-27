
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let [A,B] = input[line++].split(" ").map(Number)
        AtoBPossible(A,B)
    }
  }
  
  if (process.env.USER === "") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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
  
  function AtoBPossible(a,b){
   
   let st = []
   st.push(a)
   while(st.length){
       let num = st.pop()
       if(num==b){
           console.log("Possible")
           return;
       }
       else{
           let num1 = num*2
           let num2 =  num.toString()+"1"
           if(num1<=b){
              st.push(num1) 
           }
           if(num2<=b){
               st.push(num2)
           }
       }
   }
    console.log("Not Possible")
  }