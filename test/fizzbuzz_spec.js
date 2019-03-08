var should = chai.should()

describe('Test searchTitle function', function () {
  it('可被3跟5整除', function () {
    let number = fizzBuzz (15)
    number.should.be.equal("FizzBuzz")
  })
  it('可被3整除', function () {
    let number = fizzBuzz (3)
    number.should.be.equal("Fizz")
  })
  it('可被5整除', function () {
    let number = fizzBuzz (5)
    number.should.be.equal("Buzz")
  })
  it('不是3個5的倍數', function () {
    let number = fizzBuzz (11)
    number.should.be.equal(number)
  })
})