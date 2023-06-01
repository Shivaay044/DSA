function runProgram(input) {
    // Write code here
    input= input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i=0;i<tc;i++){
        let [n,m] = input[line++].split(" ").map(Number)
        let num1 =  input[line++].split(" ").map(Number)
        let num2 =  input[line++].split(" ").map(Number)
        solve(n,m,num1,num2)
    }
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
  
  function solve(n,m,nums1,nums2){
    
    let obj1 = {}
    let obj2 = {}
      let ans1 =[]   
      let ans2 =[]
    for(let el of nums1){
        obj1[el] = obj1[el]+1||1
    }
    
     for(let el of nums2){
        obj2[el] = obj2[el]+1||1
    }
      
      for(let el in obj1){
         if(obj2[el]===undefined){
             ans1.push(el)
         }
      }
      
      for(let el in obj2){
         if(obj1[el]===undefined){
             ans2.push(el)
         }
      }
      console.log(ans1.join(" "))
      console.log(ans2.join(" "))
  }