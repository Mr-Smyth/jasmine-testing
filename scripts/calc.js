/* SECOND LESSON ON TESTING */

/* CALCULATOR OBJECT TO ADD ONE NUMBER */
Calculator = function() {
    this.value = 0;
}

/* ADDING THE ADDITION FUNCTION TO THE cALCULATOR OBJECT */
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number"){
        this.value += number;
    } else {
        alert("Error!");
    }
}







/* FIRST LESSON ON TESTING */

/* function addition(numOne, numTwo){
    if(typeof(numOne) == "number" && typeof(numTwo) == "number"){ */ /* Known as defensive programming - checks for unwanted entries */
/*         return numOne + numTwo;
    } else {
        alert("Error");
    }
    
} */