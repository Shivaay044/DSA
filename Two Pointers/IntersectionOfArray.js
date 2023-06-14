function intersectionOfArray(n, arr1, arr2){
    //write code here
   arr1 = arr1.sort((a,b)=>a-b)
   arr2 = arr2.sort((a,b)=>a-b)
   
   let i=0;let r =0
   while(i<n && r<n){
       if(arr1[i]>arr2[r]){
           r++
       }
       if(arr1[i]<arr2[r]){
           i++
       }
       if(arr1[i]==arr2[r]){
          console.log(arr1[i])
          break;
       }
       
   }
}
