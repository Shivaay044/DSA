function runProgram(input) {
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let arr = input[line++].split(" ").map(Number)
        NextGreaterElement(n,arr)
     }
   }
   
   if (process.env.USER === "") {
     runProgram(`1
     4
     1 3 2 4`);
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
   
   function NextGreaterElement(n,arr){
      let st = []
      let res = new Array(n).fill(-1)
      for(let i=n-1;i>=0;i--){
          while(st.length!==0&&st[st.length-1]<=arr[i]){
              st.pop()
          }
          if(st.length!==0){
              res[i] = st[st.length-1]
          }
          st.push(arr[i])
      }
      console.log(res.join(" "))
   }