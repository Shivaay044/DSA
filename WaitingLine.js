
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  WaitingLine(input)
}

if (process.env.USERNAME === "getsu") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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

function WaitingLine(input){
    let q = []
    for(let i=0;i<input.length;i++){
        let [x,y] = input[i].split(" ")
        if(x=="E"){
           q.push(y) 
           console.log(q.length)
        }
        else if(x=="D"){
            if(q.length!==0){
                console.log(q.shift(),q.length)
            }else{
                console.log(-1,q.length)
            }
        }
    }
}


