
function test(){

class Balloon {
    constructor(color, hasWeight){
        this.color = color;
        this.hasWeight = hasWeight;
    }
}


class PartyBalloon extends Balloon {
    _ribbon;
    constructor(color, hasWeight, ribbonColor, ribbonLength){
        super(color, hasWeight);
        this._ribbon = {
            color: ribbonColor,
            length: ribbonLength
        }
    }

    get ribbon() {
        return this._ribbon;
    }
}

class BirthdayBalloon extends PartyBalloon{
    constructor(color, hasWeight, ribbonColor, ribbonLength, text){
        super(color, hasWeight, ribbonColor, ribbonLength)
        this._text = text;
    }
    get text(){
        return this._text;
    }
}


return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon

}

}
test();