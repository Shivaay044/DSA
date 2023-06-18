function  forumMallparking(K,arv,dep){
	// Write code here
	let c = 1
	for(let i=0;i<arv.length-1;i++){
	    if(dep[i]>arv[i+1]){
	       c++
	    }
	}
	if(c<=K){
	    console.log("Possible")
	}else{
	    console.log("Not Possible")
	}
}