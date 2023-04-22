function sumOfNum(c,f){
    let minchoco = Math.floor((f*(f+1))/2)
    
    if(minchoco<=c){
        console.log("YES")
    }else{
        console.log("NO")
    }
   }
   
   function runProgram(input){
   input = input.split("\n")
   let tc = +input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let size = input[line].split(" ").map(Number)
       let c= size[0]
       let f = size[1]
       line++
       sumOfNum(c,f)
   }
   }
   
   
   if (process.env.USERNAME === "") {
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