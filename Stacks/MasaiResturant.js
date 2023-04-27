
function runProgram(input) {
    input = input.split("\n")
  MasaiResturant(input)
}

if (process.env.USER === "") {
  runProgram(`6
1
2 5
2 7
2 9
1
1`);
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

function MasaiResturant(input){
    let st = []
    for(let i=0;i<input.length;i++){
    let x = input[i].split(" ").map(Number)
    if(x[0]==1){
        if(st.length===0){
            console.log("No Food")
        }else{
            console.log(st.pop())
        }
    }else if(x[0]==2){
        st.push(x[1])
    }
  }   
 
}
