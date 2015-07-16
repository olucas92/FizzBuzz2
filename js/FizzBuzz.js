var FizzBuzz = function(){};

FizzBuzz.prototype.playGame = function(number) {

  if(this.isDivisibleByFifteen(number)) {
    return 'fizzbuzz'
  }

  else if(this.isDivisibleByThree(number)) {
    return 'fizz'
  }
  else if(this.isDivisibleByFive(number)) {
    return 'buzz'
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