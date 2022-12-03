function extensibleObject() {
    return {
        __proto__: {},
        extend: function (obj){
            for(let i in obj){
                if (typeof obj[i] == `function`){
                    this.__proto__[i] = obj[i];
                } else {
                    this[i] = obj[i];
                }
            }
            
        }
    }

}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);


