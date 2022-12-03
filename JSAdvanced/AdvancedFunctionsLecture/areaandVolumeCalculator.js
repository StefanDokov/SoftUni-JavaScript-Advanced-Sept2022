function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};



function solve(area, vol, data){
   let arr = JSON.parse(data);

   let res = [];

   for(let el of arr) {
    let calcArea = Math.abs(area.call(el));
    let calcVol = Math.abs(vol.call(el));

    res.push({
        area: calcArea,
        volume: calcVol
    })
   }


return res;


}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )