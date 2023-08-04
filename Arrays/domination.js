function domination(n,arr){
    // write code here
 
 let obj = {}
 for(let el of arr){
     obj[el] = obj[el]+1||1
 }
 
 
 let max = 0
 for(let el in obj){
     if(obj[el]>max){
         max = obj[el]
     }
 }
  
  let count = 0
 for(let el in obj){
     if(obj[el]==max){
         count++
     }
 }
  
  if(count==1){
      console.log("YES")
  }else{
      console.log("NO")
  }
   
}







