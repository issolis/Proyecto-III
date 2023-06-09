export class node{
    data: any;
    next: node | null; 

    constructor(data:any){
        this.data=data;
        this.next=null;
    }
}