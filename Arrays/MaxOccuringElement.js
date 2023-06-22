function maximumOccuringElement(arr,n){
    //write code here
  let obj = {}
  for(let el of arr){
      obj[el] = obj[el]+1||1
  }
  
  let max = -Infinity
  for(let el in obj){
      if(obj[el]>max){
          max = obj[el]
      }
  }
  
  let res = []
  for(let el in obj){
      if(obj[el]==max){
         res.push(el)
      }
  }
  
  console.log(res[0])
 
}
