function test(speed, road) {
    let norm = 0;
    switch (road) {
        case "motorway":
            norm = 130;
            break;
        case "interstate":
            norm = 90;
            break;
        case "city":
            norm = 50;
            break;
        case "residential":
            norm = 20;
            break;

    }
    let diff = Math.abs(norm - Number(speed));
    let fine = "";
    if (diff <= 20) {
        fine = "speeding";
    }
    if (diff > 20 && diff <= 40) {
        fine = "excessive speeding";
    }
    if (diff > 40) {
        fine = "reckless driving";
    }
    if (speed <= norm) {
        console.log(`Driving ${speed} km/h in a ${norm} zone`);
    }
    if (speed > norm) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${norm} - ${fine}`);
    }


}
test(40, 'city');
console.log(`----------`);
test(21, 'residential');