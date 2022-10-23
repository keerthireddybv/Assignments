function insert(){
    class Node{
        constructor(data){
            this.data=data;
            this.next=null;
        }
    } 

class LinkedList{
        constuctor(){
            this.head=null;
            this.size=0;
        }
        insert(data){
            let node=new Node(data);
            if(this.head==null){
                this.head=node;
                this.size++;
            }
            else{
                let current=this.head;
                while(current.next!=null){
                    current=current.next;
                }
                current.next=node;
                this.size++;
            }
        }
    
    printList()
         {
            while(this.head!=null){
            document.write(this.head.data);
            document.write(" ")
            this.head=this.head.next;
           }    
         }
    }
    var ll=new LinkedList();
    var n=prompt("Enter node");
    const arr=new Array(n);
    for(let i=0;i<n;i++)
    {
        arr[i]=prompt("Enter a node");   
     }

    // ll.insert(1);
    // ll.insert(9);
    // ll.insert(5);
    // ll.insert(16);
    // // ll.insert(4);
    for(i=0;i<n;i++){
    ll.insert(arr[i]);
    }
    ll.printList(); 
   }
    
    