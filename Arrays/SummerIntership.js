function summerIntership(N,arr){
    //write code here
    let count=0
    let count1=0
    let count2=0
   for(let el of arr){
       if(el==5){
           count++
       }
       if(el==10){
           count1++
           count=count-1
       }
       if(el==20){
           count2++
           count=count-1
           count1=count1 - 1
       }
   }
   
   if(count>=0){
       console.log("YES")
   }
   else{
       console.log("NO")
   }
}
