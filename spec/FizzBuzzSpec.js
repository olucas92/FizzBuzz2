describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("knows when a number", function() {

    beforeEach(function(){
      fizzbuzz = new FizzBuzz;
    });

    it("is divisible by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("is not divisible by 3", function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function(){
      expect(fizzbuzz.isDivisibleByFive(15)).toBe(true);
    });

    it("is not divisible by 5", function(){
      expect(fizzbuzz.isDivisibleByFive(33)).toBe(false);
    });

    it("is divisible by 15", function(){
      expect(fizzbuzz.isDivisibleByFifteen(45)).toBe(true);
    });

    it("is not divisible by 15", function(){
      expect(fizzbuzz.isDivisibleByFifteen(54)).toBe(false);
    });

  });

  describe("rules of the game", function(){

    beforeEach(function(){
      fizzbuzz = new FizzBuzz;
    });

    it("should return fizz for numbers divisible by 3", function(){
      expect(fizzbuzz.playGame(9)).toBe("fizz")
    });

    it("should return buzz for numbers divisible by 5", function(){
      expect(fizzbuzz.playGame(35)).toBe("buzz")
    });

    it("should return fizzbuzz for numbers divisible by 15", function(){
      expect(fizzbuzz.playGame(45)).toBe("fizzbuzz")
    });

    it("should return a number for numbers that aren't divisible by 3, 5 or 15", function(){
      expect(fizzbuzz.playGame(37)).toBe("number")
    });

  });

});