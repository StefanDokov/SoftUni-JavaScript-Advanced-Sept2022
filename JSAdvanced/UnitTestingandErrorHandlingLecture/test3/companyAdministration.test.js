const { expect, assert } = require(`chai`);
const companyAdministration  = require(`../companyAdministration`);

describe(`tests companyAdministration`, () => {
    describe(`test on hiringEmployee`, () => {
      
     it(`right entries `, () => {
        let name = `strName`;
        let position = `Programmer`;
        let yExp = 4;
        let g = `${name} was successfully hired for the position ${position}.`;
        
        expect(companyAdministration.hiringEmployee(name, position, yExp)).to.be.equal(g);
  
     });
     it(`wrong position `, () => {
        let name = `strName`;
        let positi = `wrongStr`;
        let yExp = 4;
        let p = `We are not looking for workers for this position.`;
          
        expect(() => companyAdministration.hiringEmployee(name, positi, yExp)).to.throw(Error, p);
        
        
  
     });
     it(`less experience`, () => {
      let name = `strName`;
      let positi = `Programmer`;
      let yExp = 2;
      let d = `${name} is not approved for this position.`;
        
      expect(companyAdministration.hiringEmployee(name, positi, yExp)).to.be.equal(d);
      
  
   });
   it(`right and it is three`, () => {
      let name = `strName`;
      let position = `Programmer`;
      let yExp = 3;
      let g = `${name} was successfully hired for the position ${position}.`;
      
      expect(companyAdministration.hiringEmployee(name, position, yExp)).to.be.equal(g);
  
   });
   
  
     
    });
    describe(`test on calculateSalary`, () => {
      
     it(`wrong hours, str`, () => {
        let hrs = `4`;
        
        let m = "Invalid hours";
        
        expect(() => companyAdministration.calculateSalary(hrs)).to.throw(Error, m);
  
     });
     it(`wrong hours, not positive`, () => {
      let hrs = -2;
      
      let m = "Invalid hours";
      
      expect(() => companyAdministration.calculateSalary(hrs)).to.throw(Error, m);
  
   });
   it(`enough hours`, () => {
      let hrs = 10;
      
      let m = 150;
      
      expect(companyAdministration.calculateSalary(hrs)).to.be.equal(m);
  
   });
   it(`over hours`, () => {
      let hrs = 170;
      
      let m = 3550;
      
      expect(companyAdministration.calculateSalary(hrs)).to.be.equal(m);
  
   });
  });
  describe(`test on firedEmployee`, () => {
      
     it(`wrong inputs`, () => {
        
        let g = "Invalid input";
        
        expect(() => companyAdministration.firedEmployee(`pesho`, 0)).to.throw(Error, g);
        expect(() => companyAdministration.firedEmployee(`{}`, 1)).to.throw(Error, g);
        expect(() => companyAdministration.firedEmployee(1, [])).to.throw(Error, g);
        expect(() => companyAdministration.firedEmployee([`Pesho`], 2)).to.throw(Error, g);
        expect(() => companyAdministration.firedEmployee([`pesho`], -1)).to.throw(Error, g);
        expect(() => companyAdministration.firedEmployee([`Pesho`], `pesho`)).to.throw(Error, g);
  
     });
    
   
   
   it(`right inputs`, () => {
      
      
      expect(companyAdministration.firedEmployee([`todor`], 0)).to.be.equal(``);
      expect(companyAdministration.firedEmployee([`todor`, `gosho`], 0)).to.be.equal(`gosho`);
      expect(companyAdministration.firedEmployee([`todor`, `gosho`, `pesho`], 0)).to.be.equal(`gosho, pesho`);
      expect(companyAdministration.firedEmployee([`todor`, `gosho`, `pesho`], 1)).to.be.equal(`todor, pesho`);
      expect(companyAdministration.firedEmployee([`todor`, `gosho`, `pesho`], 2)).to.be.equal(`todor, gosho`);
  
  
   });
 

   
  });
    
    
  });