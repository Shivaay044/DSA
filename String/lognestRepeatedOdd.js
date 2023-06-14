function longestRepeatedOdd(n, a) {
    //write code here
   let max = 0
for(let i=0;i<n;i++){
    let bag = ""
    for(let j=i;j<n;j++){
        bag+=a[j]
        if(check(bag)){
            max = Math.max(max,bag.length)
        }
    }
}

console.log(max)

function check(bag){
    let s = new Set(bag).size
    if(s==1&&bag[0]%2==1){
        return true
    }else{
        return false
    }
}
    
}

