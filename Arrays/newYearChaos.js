function main(n,q) {
   
    var steps = 0;
    var swaped = true;
    while (swaped) {
        swaped = false;
        for (var i = 0; i < n - 1; i++) {
            var init = q[i];
            if (init - i > 3) {
                console.log('Too chaotic');
                swaped = false;
                break;
            } else if (init > q[i+1]) {
                swaped = true;
                steps ++;
                var temp = init;
                q[i] = q[i+1];
                q[i+1] = temp;
            }
        }   
    }
    if (i === n - 1) {
        console.log(steps)            
    }
}





function runProgram(input){
input = input.trim().split("\n")
let tc = +input[0]
let line = 1
for(let i=0;i<tc;i++){
 let n = input[line++]
 let arr = input[line++].trim().split(" ").map(Number)
 main(n,arr)
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


//2nd Way
function minimumBribes(n,queue) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] - (i+1) > 2){ chaotic = true }
      for (let j = 0; j < i; j++) {
        if (queue[j] > queue[i]) { bribes++ }
        }
      }
    if(chaotic === true){
      console.log("Too chaotic")
    } else {
      console.log(bribes)
    }
   }