var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal= 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to subtract', function(){
    calculator.previousTotal=7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply', function(){
    calculator.previousTotal= 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide', function(){
    calculator.previousTotal= 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    assert.strictEqual(calculator.runningTotal, 7);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 74);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 746);
  })

  it('should be able to chain multiple operations together', function(){
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousOperator, '+');
    calculator.operatorClick('-');
    assert.strictEqual(calculator.previousOperator, '-');
    calculator.operatorClick('*');
    assert.strictEqual(calculator.previousOperator, '*');
    calculator.operatorClick('/');
    assert.strictEqual(calculator.previousOperator, '/');
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.previousTotal= 10;
    calculator.add(5);
    assert.strictEqual(calculator.runningTotal, 15);
    calculator.clearClick();
    assert.strictEqual(calculator.previousTotal, 10);
    assert.strictEqual(calculator.runningTotal, 0);
  })

});
