describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    beforeEach(function(){
      fizzbuzz = new FizzBuzz;
    })

    it("is divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is not divisible by 3", function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});