function test(){


class List {
  constructor(arr = []){
    this.arr = arr.sort((a, b) => a - b);
    this.size = this.arr.length;
  }
  add(inp) {
    this.arr.push(inp);
    this.arr.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(indx){
    if (indx >= 0 && indx < this.arr.length){
       this.arr.splice(indx, 1);
       this.size--;
       return 
    }
  }
  get(inde){
    if (inde >= 0 && inde < this.arr.length){
        return this.arr[inde];
     }
  }
  

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));





}
test();