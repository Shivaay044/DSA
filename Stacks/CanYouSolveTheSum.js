function runProgram(input) {
    // Write code here
    input = input.split("\n")
    let n = +input[0]
    let arr = input[1].split(" ").map(Number)
    solve(n,arr)
  }
  
  if (process.env.USER === "") {
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
  
  function solve(n,arr){
      let x = new Array(n).fill(-1)
      let y = new Array(n).fill(-1)
      let st=[]
      for(let i=0;i<n;i++){
         while(st.length!==0&&arr[st[st.length-1]]<arr[i]){
             st.pop()
         }
         if(arr[st[st.length-1]]>arr[i]){
              x[i]= st[st.length-1]+1
         }
         st.push(i)
      }
      
      st=[]
       for(let i=n-1;i>=0;i--){
         while(st.length!==0&&arr[st[st.length-1]]<arr[i]){
             st.pop()
         }
         if(arr[st[st.length-1]]>arr[i]){
              y[i]= st[st.length-1]+1
         }
         st.push(i)
      }
      
      let bag=""
  for(let i=0;i<n;i++){
      bag+=x[i]+y[i]+" "
   }
   console.log(bag)
  }