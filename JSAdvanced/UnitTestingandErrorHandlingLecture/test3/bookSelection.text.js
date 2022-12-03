let {assert} = require(`chai`);

const bookSelection = require("../bookSelection");





describe("Tests for bookSelection", function() {
    describe("test for isGenreSuitable", function() {
        function concatenateStr(genre, age){
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        }
        it("wrong genre", function() {
            let expectText = concatenateStr("Thriller",12);
            assert.equal(bookSelection.isGenreSuitable(`Thriller`,12), expectText);
            expectText = concatenateStr(`Horror`, 12);
            assert.equal(bookSelection.isGenreSuitable(`Horror`,12),expectText);
        });
        it (`correct genre`, () => {
            let expectText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable(`Thriller`,13), expectText);
            assert.equal(bookSelection.isGenreSuitable(`Thriller`,25), expectText);
            assert.equal(bookSelection.isGenreSuitable(`Horror`,13),expectText);
            assert.equal(bookSelection.isGenreSuitable(`Horror`,25),expectText);
        })
     });

     describe("test for isItAffordable", function() {

        

        it("don't have enough money", function() {
            assert.equal(bookSelection.isItAffordable(11, 10), `You don't have enough money`);
            assert.equal(bookSelection.isItAffordable(51, 50), `You don't have enough money`);
            
        });
        it("Book bought", function() {
            assert.equal(bookSelection.isItAffordable(10, 11), `Book bought. You have 1$ left`);
            assert.equal(bookSelection.isItAffordable(10, 10), `Book bought. You have 0$ left`);
            assert.equal(bookSelection.isItAffordable(10, 50), `Book bought. You have 40$ left`);
            
        });
        it("Wrong data type", function() {
            assert.throw(() => {bookSelection.isItAffordable('pesho', 10)}, `Invalid input`);
            assert.throw(() => {bookSelection.isItAffordable('pesho', `gosho`)}, `Invalid input`);
            assert.throw(() => {bookSelection.isItAffordable('10', `10`)}, `Invalid input`);
            assert.throw(() => {bookSelection.isItAffordable(10, `10`)}, `Invalid input`);
            
        });

        describe("test for suitableTitles", function() {

            it("wrong data type", function() {
                assert.throw(() => {bookSelection.suitableTitles(`gosho`, `pesho`)}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles(10, `pesho`)}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles({}, `pesho`)}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10)}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], [])}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {})}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles({}, {})}, `Invalid input`);
                assert.throw(() => {bookSelection.suitableTitles(10, 10)}, `Invalid input`);
            });
            it("correct data", function() {
                let input = [
                    { title: `The Da Vinci Code`, genre: `Thriller`},
                    { title: `The Da Vinci Code1`, genre: `Thriller`},
                    { title: `The Da Vinci Code2`, genre: `Horror`},
                ]
                let result = [`The Da Vinci Code`, `The Da Vinci Code1`];
                assert.equal(bookSelection.suitableTitles(input,`Thriller`).join(" "), result.join(" "));
                result = [`The Da Vinci Code2`];
                assert.equal(bookSelection.suitableTitles(input,`Horror`).join(" "), result.join(" "));
                result = [];
                assert.equal(bookSelection.suitableTitles(input,`Comedy`).join(" "), result.join(" "));
            });
         });
     });

     
});
