const chai=require('chai');
const expect=chai.expect;
const Calculadora = require('./calculadora');

describe('calculadora',function(){
  let calculadora = new Calculadora;
  it('sum() should return 0 if no arguments are passed',function(){
    expect(calculadora.sum()).to.equal(0);
  });
  it('sum() should return 25 if 10 and 15 are passed', function(){
    expect(calculadora.sum(10,15)).to.equal(25);
  });
});
