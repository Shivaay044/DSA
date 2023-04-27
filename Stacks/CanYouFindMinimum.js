
function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let n = +input[0]
    let arr = input[1].split(" ").map(Number)
   FindSum(n,arr)
  }
  
  if (process.env.USER === "") {
    runProgram(`5
    5 4 1 3 2`);
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
  
  function FindSum(n,arr){
     let st = []
     let left = new Array(n).fill(-1)
     for(let i=0;i<n;i++){
         while(st.length!==0 && arr[st[st.length-1]]<=arr[i]){
             st.pop()
         }
         if(st.length!==0){
             left[i] = st[st.length-1]+1
         }
         st.push(i)
     }
     
     st=[]
     let right = new Array(n).fill(-1)
     for(let i=n-1;i>=0;i--){
         while(st.length!==0 && arr[st[st.length-1]]<=arr[i]){
             st.pop()
         }
         if(st.length!==0){
             right[i] = st[st.length-1]+1
         }
         st.push(i)
     }
     
     let res = new Array(n)
     for(let i=0;i<n;i++){
        res[i] = left[i]+right[i] 
     }
     console.log(res.join(" "))
  }
  