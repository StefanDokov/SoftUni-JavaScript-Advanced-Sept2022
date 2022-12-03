const { expect } = require(`chai`);
const chooseYourCar  = require(`../chooseYourCar`);

describe("Tests for chooseYourCar", function() {

    describe("Tests for choosingType", function() {
        it("wrong inputs", function() {
            let g = "Invalid Year!";
            let b = "This type of car is not what you are looking for."
            expect(() => chooseYourCar.choosingType(`carone`, `red`, 1899)).to.throw(Error, g);
            expect(() => chooseYourCar.choosingType(`carone`, `red`, 2023)).to.throw(Error, g);
            expect(() => chooseYourCar.choosingType(`noSedan`, `red`, 2011)).to.throw(Error, b);
            expect(chooseYourCar.choosingType(`Sedan`, `red`, 2005)).to.be.equal("This Sedan is too old for you, especially with that red color.");
        });
        it("right inputs", function() {
            
            expect(chooseYourCar.choosingType(`Sedan`, `red`, 2010)).to.be.equal("This red Sedan meets the requirements, that you have.");
            expect(chooseYourCar.choosingType(`Sedan`, `red`, 2015)).to.be.equal("This red Sedan meets the requirements, that you have.");
            
            
        });
     });
     describe("Tests for brandName", function() {
        it("wrong inputs", function() {
            let g = "Invalid Information!";
            expect(() => chooseYourCar.brandName([`bmw`,`toyota`,`merc`], -1)).to.throw(Error, g);
            expect(() => chooseYourCar.brandName([`bmw`,`toyota`,`merc`], 3)).to.throw(Error, g);
            expect(() => chooseYourCar.brandName(`str`, 1)).to.throw(Error, g);
            expect(() => chooseYourCar.brandName({}, 1)).to.throw(Error, g);
            expect(() => chooseYourCar.brandName([`bmw`,`toyota`,`merc`], "1")).to.throw(Error, g);
            expect(() => chooseYourCar.brandName([`bmw`,`toyota`,`merc`], [])).to.throw(Error, g);
        });
        it("right inputs", function() {
            
            expect(chooseYourCar.brandName([`bmw`,`toyota`,`merc`], 0)).to.be.equal(`toyota, merc`);
            expect(chooseYourCar.brandName([`bmw`,`toyota`,`merc`], 1)).to.be.equal(`bmw, merc`);
            expect(chooseYourCar.brandName([`bmw`,`toyota`,`merc`], 2)).to.be.equal(`bmw, toyota`);
            
        });
     });
     describe("Tests for carFuelConsumption", function() {
        it("wrong inputs", function() {
            let g = "Invalid Information!";
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw(Error, g);
            expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw(Error, g);
            expect(() => chooseYourCar.carFuelConsumption(`str`, 1)).to.throw(Error, g);
            expect(() => chooseYourCar.carFuelConsumption({}, 1)).to.throw(Error, g);
            expect(() => chooseYourCar.carFuelConsumption([], "1")).to.throw(Error, g);
            expect(() => chooseYourCar.carFuelConsumption([`bmw`,`toyota`,`merc`], [])).to.throw(Error, g);
        });
        it("right inputs", function() {
            
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.be.equal("The car burns too much fuel - 10.00 liters!");
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.be.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            
        });
     });
     
});
