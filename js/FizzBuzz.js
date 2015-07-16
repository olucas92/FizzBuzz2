var FizzBuzz = function(){};

FizzBuzz.prototype.playGame = function(number) {
  if(this.isDivisibleByThree(number)){
    return 'fizz'
  }
};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0
};