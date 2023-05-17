function numberOfWish(N,S){
    // write code here
    let obj={"w":0,"i":0,"s":0,"h":0}
    for(let el of S){
       if(obj[el]===undefined){
          continue;
       }
       else{
           obj[el]++
       }
    }
    let min = Infinity
   for(let key in obj){
       if(min>obj[key]){
           min = obj[key]
       }
   }
   console.log(min)
}
