function  sumOfNum(arr,n,k){
    let max_sum=0;
    for(let i=0;i<k;i++){
        max_sum+=arr[i]
    }
    let curr_sum = max_sum
    for(i=k;i<n;i++){
        curr_sum=curr_sum-arr[i-k]+arr[i]
        max_sum= Math.max(curr_sum,max_sum)
    }
    console.log(max_sum)
}

function runProgram(input){
 input = input.split("\n")
     let size = input[0].split(" ").map(Number)
     let n = size[0]
     let k = size[1]
     let arr = input[1].split(" ").map(Number)
    sumOfNum(arr,n,k)
      
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



