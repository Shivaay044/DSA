function setZeroes(n,m,matrix) {
    //write code here
   let track = []
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]===0){
                track.push([i,j])
            }
        }
    }
    
    for(let j=0;j<track.length;j++){
     let [x,y] = track[j]
     for(let i=0;i<m;i++){
        matrix[x][i]=0
    }
    for(let i=0;i<n;i++){
        matrix[i][y]=0
    }
  }
  
  for(let el of matrix){
      console.log(el.join(" "))
  }
    
  }