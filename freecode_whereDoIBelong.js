function getIndexToIns(arr, num) {
  let prevInd=0;
      arr.sort((a,b)=>a-b);
    console.log(arr)
    arr.map((el)=>{
      if(el>num||el===num) return prevInd
prevInd++;
    
  })
    console.log(prevInd)
  return prevInd;
}

// getIndexToIns([40, 60], 80);
// getIndexToIns([20,3,5,18], 19)
// getIndexToIns([1,2,3,4], 1.5)
// getIndexToIns([10, 20, 30, 40, 50], 35)
getIndexToIns([10, 20, 30, 40, 50], 30) 
