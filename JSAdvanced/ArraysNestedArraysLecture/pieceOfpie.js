function test(arr, str, end) {

    function supa(supar, strt, endd) {
        let strta = supar.indexOf(strt);
        let enda = supar.indexOf(endd);
        let g = [];
        for (let i = strta;i <= enda;i++){
            g.push(supar[i]);
        }
        return (g)


    }
    return supa(arr, str, end);

}
test(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
console.log(`---------`);
test(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);