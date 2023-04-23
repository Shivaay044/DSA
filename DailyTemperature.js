
function runProgram(input) {
    input = input.split("\n")
     let tc = +input[0]
     let line =  1
     for(let i=0;i<tc;i++){
         let n = +input[line++]
         let arr = input[line++].split(" ").map(Number)
     
         DailyTemperature(n,arr)
     }
   }
   
   if (process.env.USER === "") {
     runProgram(`2
     4
     30 40 50 60
     8
     73 74 75 71 69 72 76 73
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
   
   function  DailyTemperature(n,arr){
    let st = []
    let res = new Array(n)
    st.push(n-1)
    res[n-1] = 0
    for(let i=n-2;i>=0;i--){
        while(st.length!==0&&arr[st[st.length-1]]<=arr[i]){
            st.pop()
        }
        if(st.length===0){
            res[i]=0
        }else{
            res[i] = st[st.length-1]-i
        }
        st.push(i)
    }
    console.log(res.join(" "))
   }
   