



function hardwareProblem(n,d,t){
    for(let i=0;i<n-1;i++){
       if(t[i+1]-t[i]<=d){
           console.log(t[i+1])
           return
       }
    }
    console.log(-1)
  }
  