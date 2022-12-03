(function solve() {
 
    Array.prototype.skip = function (n) {
 
        let newArr = [];
 
        for (let i = n; i < this.length; i++) {
 
            newArr.push(this[i]);
 
        }
        return newArr;
    }
 
    Array.prototype.last = function () {
 
        return this[this.length - 1];
 
    }
 
    Array.prototype.take = function (n) {
 
        let newArr = [];
 
        for (let k = 0; k < n; k++) {
 
            newArr.push(this[k]);
 
        }
        return newArr;
 
    }
 
    Array.prototype.sum = function () {
 
        let sum = 0;
 
        for (let p = 0; p < this.length; p++) {
 
            sum += this[p];
 
        }
        return sum;
 
    }
 
    Array.prototype.average = function () {
 
        return this.sum() / this.length;
 
    }
 
 
}());