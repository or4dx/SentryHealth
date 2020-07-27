
var palindrom = require('../public/src/palindrome.test');
var expect = require('chai').expect;

describe('#palindrom()', function() {

    //Test with palindrome word
  context('with palindrome word', function() {
    it('should return - This is a pallendrom!', function() {
      expect(palindrom('mom')).to.equal('This is a pallendrom!')
    })
  })

  //Test with upper and lowercase
  context('with upper and lowercase', function() {
    it('should return - This is not a pallendrom!', function() {
      expect(palindrom('RaceCAr')).to.equal('This is a pallendrom!')
    })
    
})

    //Test with special character
    context('with special characters ', function() {
        it('should return - This is not a pallendrom!', function() {
          expect(palindrom('mall$%#am')).to.equal('This is not a pallendrom!')
        })
      })


  
})