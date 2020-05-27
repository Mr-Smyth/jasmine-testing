/* A TEST SUITE */

/* CALL THE JASMINE DESCRIBE FUNCTION */
describe("This is a whatCanIDrink function", function(){

    /* BEFORE EACH BLOCK TEST, A NEW INSTANCE WILL BE CREATED TO TEST, SO NO RESIDUE FROM PREVIOUS TEST */
    beforeEach(function (){
        drink = new whatCanIDrink();
    });

    describe("checks age", function(){
        it("exists", function(){
            expect(whatCanIDrink).toBeDefined();
        });
    });
});