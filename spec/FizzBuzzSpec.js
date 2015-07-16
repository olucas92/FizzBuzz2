describe("FizzBuzz", function(){

  var fizzbuzz;

  describe("knows when a number", function(){

    it("is divisible by 3", function(){
      fizzbuzz = new FizzBuzz;
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    });

    it("is not divisible by 3", function(){
      fizzbuzz = new Fizzbuzz;
      expect(fizzbuzz.isDivisibleByThree(10)).toBe(false)
    });
  });

});