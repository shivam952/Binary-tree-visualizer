import Node from './Node'

export default class BST{
    constructor() {
        this.root = null;
    }
    insert(data){
        if(!this.root) this.root=new Node(data);
        else this._insert(this.root,data)
    }
    _insert(node,data){
        if(data<node.data){
            if(node.left) this._insert(node.left,data);
            else node.left=new Node(data);
        }
        else{
            if(node.right) this._insert(node.right,data);
            else node.right=new Node(data);
        }
    }
    inOrder(){
        var arr=[];
        this._inOrder(this.root,arr);
        console.log(arr);
    }
    _inOrder(node,arr){
        if(node){
            this._inOrder(node.left,arr);
            arr.push(node.data);
            this._inOrder(node.right,arr);
        }
    }
}