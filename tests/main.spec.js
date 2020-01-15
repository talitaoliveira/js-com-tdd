let expect = require('chai').expect;

describe('Main', function() {

  let arr;
 
  // roda uma vez antes do bloco
  before(() => {

  })

  // roda uma vez antes do bloco
  after(() => {

  })

  // roda uma vez antes do bloco
  beforeEach(() => {
    arr = [1, 2, 3]
  })

   // roda uma vez antes do bloco
   afterEach(() => {

  })

  it('should have a size of 4 when push another value of the array',  () => {
    arr.push(4);
    console.log(arr.length)
  })

  it('should have a size of 3 when pop a value of the array',  () => {
    console.log(arr)
    arr.pop();
    console.log(arr.length)
  })

  it('should remove the value 3 when use pop a value of the array',  () => {
    console.log(arr)
    console.log(arr.pop() === 3);
  })


})
