class Node {

	constructor(value,next=null){
this.value=value;
		this.next=next;
	}

}

let n1=new Node(20)
let n2 = new Node(32,n1)

console.log(' n1 . ', n1)
console.log(' n2 , ',n2)

