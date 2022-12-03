function test(raw){
    let g = [];
    
   for (let i = 0;i < raw.length;i++){
   let [name, level, items] = raw[i].split(" / ");
   level = Number(level);
   items = items ? items.split(", ") : [];
    g.push({name, level,items});
     
     
   }
  
   console.log(JSON.stringify(g));

}
test(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log(`---------`);
test(['Jake / 1000 / Gauss, HolidayGrenade']);