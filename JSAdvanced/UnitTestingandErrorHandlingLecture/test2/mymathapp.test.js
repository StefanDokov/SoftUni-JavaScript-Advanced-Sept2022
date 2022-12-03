const { assert } = require(`chai`);
const companyAdministration  = require(`../companyAdministration`);

describe(`tests companyAdministration`, () => {
describe(`test on hiringEmployee`, () => {

   it(`right entries `, () => {
      let name = `strName`;
      let position = `Programmer`
      let yExp = 4;
      let g = `${name} was successfully hired for the position ${position}.`;
      let allHiring = companyAdministration.hiringEmployee(name, position, yExp);
      expect(allHiring).to.be.equal(g);

   });
   it(`wrong position `, () => {
      let name = `strName`;
      let position = `wrongStr`
      let yExp = 4;
      let g = `We are not looking for workers for this position.`;
      let allHire = companyAdministration.hiringEmployee(name, position, yExp);
      assert.throw(() => allHire, g);

   });

   
      
  
  
  });
});