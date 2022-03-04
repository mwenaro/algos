function frankenSplice(arr1, arr2, n) {
  let box=[];
  arr2.map(el=>box.push(el));
     
  box.splice(n,0,...arr1);
    return box;
}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
