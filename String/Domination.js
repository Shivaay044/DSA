function domination(n,arr){
    // write code here
    let obj = {}
    for(let el of arr){
        obj[el] = obj[el]+1 || 1
    }
    
    let max = -Infinity
    for(let key in obj){
        if(obj[key]>max){
            max = obj[key]
        }
    }
   
   let count = 0
    for(let key in obj){
        if(obj[key]==max){
           count++
        }
    }
   
   if(count==1){
       console.log("YES")
   }else if(count>1){
       console.log("NO")
   }
   
}