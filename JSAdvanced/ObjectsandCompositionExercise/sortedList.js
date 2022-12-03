function test(raw) {
    let list = createSortedList();
    list.add(5);
    list.add(6);
    list.add(7);
    list.add(4);
    list.add(3);
    list.add(2);
    list.add(1);
    list.add(9);
    list.add(10);

    console.log(list.get(1));
    list.remove(1);
    console.log(list.get(1));
    console.log(list.size)

    
    function createSortedList() {
        
        return {
            g: [].sort((a,b) => a - b),
            size: 0,
            add(num) {
                this.g.push(num);
                this.size++;
                return this.g.sort((a,b) => a - b);
            },
            remove(index){
                if (index >= 0 && index < this.g.length){
                this.g.splice(index,1);
                this.size--;
                return this.g.sort((a,b) => a - b);
                } else {
                    return undefined;
                }
            },
            get(ind) {
                if (ind >= 0 && ind < this.g.length){
                 return this.g[ind];
                } else {
                    return undefined;
                }
            }
            


        }
            
        
    }





}
test();
console.log(`------------`);
