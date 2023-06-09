import { node } from './node.model';


export class linkedList{
    head: node | null;
    amountElements:number=0; 

    constructor(){
        this.head=null;
    }

    insert(data:any):void{
        let newNode=new node(data);
        if(this.head==null ){
            this.head=newNode; 
        }
        else{
            let aux=this.head;
            while(aux.next!=null){
                aux=aux.next; 
            }
            aux.next=newNode; 
        }
    }
}