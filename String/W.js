function patternW(n){
    // write code here
  for(let i=0;i<n;i++){
      let bag = ""
      for(let j=0;j<2*n;j++){
          if(i==j){
              bag+="\\"
          }
          else if(i+j==(2*n)-1){
             bag+="/"
          }
          else{
              bag+=" "
          }
      }
     
      
      console.log(bag+bag.trimEnd())
  }
}


