function chunkArrayInGroups(arr, size) {
  let box= [];
let temp_arr=[];
arr.map((val)=>{
  temp_arr.push(val);
    if(temp_arr.length===size){
          box.push(temp_arr)
          temp_arr=[]; 
    }
        

})
if(temp_arr.length>0) box.push(temp_arr)
console.log(box)
  return box
;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
