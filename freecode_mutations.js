function mutation(arr) {
  let result=true;
  let dic={}
  arr[0]
      .toLowerCase().split('')
  .map(char=>dic[char]=char);

arr[1].toLowerCase().split('')
.map(val=>{
  if(dic[val]===undefined) result=false
  
})
    console.log(result)
  return result;
}

mutation(["hello", "hey"]);
