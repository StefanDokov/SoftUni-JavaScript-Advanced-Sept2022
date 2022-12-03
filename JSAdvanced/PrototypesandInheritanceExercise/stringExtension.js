(function test() {

    String.prototype.ensureStart = function (stre) {
        if (!this.startsWith(stre)) {
            return stre + this;
        } else {
            return this + "";
        }
    }
    String.prototype.ensureEnd = function (stra) {
        if (!this.endsWith(stra)) {
            return this + stra;
        } else {
            return this + "";
        }
    }
    String.prototype.isEmpty = function () {
        if (this == "") {
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            let g = `.`;
            return g.repeat(n);
        }
        if (this.length <= n) {
            return this + "";
        } else if (this.length > n) {
            let me = this.substring(0, n);
            if (me.includes(` `)){
            let arr = me.split(` `);
                arr.pop();
                let t = arr.join(` `) + `...`;
                if (t.length > n) {
                    arr.pop();
                    return arr.join(` `) + `...`;
                } else {
                    return arr.join(` `) + `...`;
                }
                

            } else {
                
                return this.substring(0, (n - 3)) + `...`;
            }
        }
    }

    String.format = function (strr, ...params) {

        let aro = strr.split(` `);
        for (let g of aro) {
            if (g.includes(`{`)) {
                if (params.length > 0) {
                    aro.splice(aro.indexOf(g), 1, params.shift());
                }
            }
        }
        return aro.join(" ");

    }



}
    ());


let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(5);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    );

console.log(str)