function sumOfNum(nums,n,target){
    let sum=0; let l =0
    let min = Infinity
    for(let i=0;i<n;i++){
      while(sum<target&&l<n){
          sum+=nums[l]
          l++
      }
      
     if(sum>=target){
         min = Math.min(min,l-i)
     }
     
      sum = sum - nums[i]
    }
   min!= Infinity ? console.log(min):console.log(-1)
}


function runProgram(input){
 input = input.split("\n")
 let tc = +input[0]
 let line = 1
 for(let i=0;i<tc;i++){
    let size = input[line].split(" ").map(Number)
    let n = +size[0]
    let k = +size[1]
    line++
    let arr = input[line].split(" ").map(Number)
    line++
    sumOfNum(arr,n,k)
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
