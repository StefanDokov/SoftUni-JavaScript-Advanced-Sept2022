function test(raw) {

    let rect = rectangle(4, 5, 'red');
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.color);
    console.log(rect.calcArea());

    function rectangle(width, height, color) {
        color = color.replace(color[0], color[0].toUpperCase());
        return {
            width,
            height,
            color: color,
            calcArea() { return this.width * this.height }
        }
    }


}
test(
);
console.log(`----------`);
