function test(arrO){
  let g = [];
  let func = {
    add(str) {
       g.push(str);
    },
    remove(str) {
       while (g.includes(str)) {
           g.splice(g.indexOf(str),1);
       }
    },
    print() {
       console.log(g.join(','));
   
    }
   }

  for (let el of arrO){
     let [action, string] = el.split(" ");
     func[action](string);
  }



}
test(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log(`--------`);
test(['add pesho', 'add george', 'add peter', 'remove peter','print'])