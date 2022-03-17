class Node {

	constructor(value,next=null){
this.value=value;
		this.next=next;
	}

}

class LinkedList{
 constructor(head=null){this.head=head}
 addHead(value){
	 
let newNode = new Node(value)
	 if(this.head) newNode.next=this.head;
	 
  this.head=newNode;
 }
 

}

let ll = new LinkedList()
     ll.addHead(200)
     ll.addHead(150)

console.log(ll)


