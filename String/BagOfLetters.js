function bagOfLetters(N,bag,M,A){
    //write code here
    let obj1={}
    let obj2={}
    for(let el of bag){
        obj1[el]=obj1[el]+1||1
    }
    
  
    for(let ol of A){
        obj2[ol]=obj2[ol]+1||1
    }
    
    //console.log(obj1,obj2)
    let flag = "Yes"
   for(let key in obj2){
       if(obj1[key]<obj2[key] || obj1[key]==undefined){
           flag="No"
           break;
       }
   }
    console.log(flag)
  }