/* SECOND LESSON ON TESTING */
/* MODIFY PREVIOUS CODE TO MATCH NEW FUNCTION IN CALC.JS */
describe("Calculator", function() {

    beforeEach(function(){ /* THIS BeforeEach PREVENTS THE TOTAL RUNNING INTO NEXT TEST */
        calc = new Calculator; /* CREATE NEW INSTANCE OF CALCULATOR OBJECT*/
    });
    

    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });

        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function() {
        spyOn(window, "alert");
        calc.add("Hitchhikers");
        expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});









/* FIRST LESSON ON TESTING */
/* describe("Calculator", function() {

    let calc = new Calculator;

    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
        spyOn(window, "alert");
        addition("Hitchhikers", "Guide");
        expect(window.alert).toHaveBeenCalledWith("Error");
        });
    });
}); */