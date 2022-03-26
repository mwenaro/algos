function recursive_fac(num){

if(num===1) return num;
else return num*recursive_fac(num-1);
return ;
}

function fac(num){
  let f=1;
  if(num===1) return num;

  while(num>1){
f*=num--;
  }

return f;

}


console.log(recursive_fac(4));
console.log(fac(4));
