const chai = window.chai
const expect = chai.expect

describe('add', () => {
    it("it should return the sum of to given numbers", () => {
        expect(add(13, 19)).to.deep.equal(32)
    })
    it("it should throw an error if there are too less/much params given", () => {
        expect(add(13)).to.deep.equal("Not enough params!")
        expect(add(13, 17, 19, 21)).to.deep.equal("Too much params!")
    })  
    it("it should throw an error if at least one of the two values is not a number", () => {
        expect(add(13, '19')).to.deep.equal("add() can only add two numbers!")
        expect(add(13, 'Hello World')).to.deep.equal("add() can only add two numbers!")
    })        
})
