function test(raw){
    const library = {
        print: function () {
          console.log(`${this.name} is printing a page`);
        },
        scan: function () {
          console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
          console.log(`${this.name} is playing '${track}' by ${artist}`);
        },
      };
      const orders = [
        {
          template: { name: 'ACME Printer'},
          parts: ['print']      
        },
        {
          template: { name: 'Initech Scanner'},
          parts: ['scan']      
        },
        {
          template: { name: 'ComTron Copier'},
          parts: ['scan', 'print']      
        },
        {
          template: { name: 'BoomBox Stereo'},
          parts: ['play']      
        }
      ];
      const products = factory(library, orders);
      console.log(products);




function factory(library, orders){

  let all = [];
 for (let i = 0;i < orders.length;i++) {
    let g = {};
    g.name = orders[i].template.name;
    for (let el of orders[i].parts){
        g[el] = library[el];
    }
    all.push(g);

 }

return all;


}


}
test();