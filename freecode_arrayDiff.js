function diffArray(arr1, arr2) {
  const newArr = [];
arr1.map(val=>{
  if(arr2.indexOf(val)===-1) newArr.push(val) 
})

arr2.map(val=>{
  if(arr1.indexOf(val)===-1) newArr.push(val) 
})
console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);