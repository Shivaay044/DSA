
function game(n,arr){
    let most = arr[0]
    let least = arr[0]
    let m=0; let l =0;
    for(let i=1;i<n;i++){
        if(most<arr[i]){
            most = arr[i]
            m++
        }
     }
     
     for(let i=1;i<n;i++){
        if(least>arr[i]){
            least = arr[i]
            l++
        }
     }
     console.log(m,l)
   }
   
   
   
   
   function runProgram(input){
     input = input.split('\n')
     let tc = +input[0]
     let line = 1
     for(let i=0;i<tc;i++){
          let N = +input[line]
          line++
          let arr = input[line].split(" ").map(Number)
          line++
          game(N,arr)
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