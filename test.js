var expect = require('chai').expect
  , body = require('./')
  , ripple = { 
      resources: { 
        foo: { 
          body: [ 1, 2, 3 ] 
        } 
      , 'bar.baz': { 
          body: 4 
        } 
      }
    } 
  
describe('body', function() {

  it('should return resource body', function() {
    expect(body(ripple)('foo')).to.eql([1,2,3])
  })

  it('should fail gracefully', function() {
    expect(body(ripple)('baz')).to.not.be.ok
  })

  it('should work with dotted names', function() {
    expect(body(ripple)('bar.baz')).to.be.eql(4)
  })

})