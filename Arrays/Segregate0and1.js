let arr = [0,1,0,1,1,0]
let n = arr.length

function fun(n,arr){
  let l = 0; let r = n-1
  while(l<r){
    while(arr[l]==0){
       l++
    }
    while(arr[r]==1){
       r--
    }
    if(arr[l]>arr[r]){
      temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
    }
  }
  console.log(arr)
}

fun(n,arr)