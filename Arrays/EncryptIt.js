function Encrypted(n,arr){
 
    let i=0;  let j=n-1
    let bag=""
    
    if(n==1){
        bag+=arr[n-1]
        console.log(bag)
        return
    }
    while(i< j){
        bag+=arr[i]+" "+arr[j]+" "
        i++
        j--
        if(i==j){
            bag+=arr[j]+" "
        }
    }
    
    console.log(bag.trim())
    
    }
    
    
    function runProgram(input){
     input = input.split("\n")
     let tc = +input[0]
     let line = 1
     for(let i=0;i<tc;i++){
         let  n = +input[line]
         line++
         let arr = input[line].split(" ").map(Number)
         line++
        Encrypted(n,arr)
     }
    }
    
    
    if (process.env.USERNAME === "") {
         runProgram(`2
         5
         1 3 5 4 2
         6
         1 3 5 6 4 2`);
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
    