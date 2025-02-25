const expect = require("chai").expect;
const assert = require("chai").assert;
const { isSymmetric } = require("./05.checkForSymetry.js");

describe('check if array is symmetric', () => {
    it("the argument is array", ()=>{
        expect(isSymmetric([])).to.be.true;
    });
    it("should return false if the input isnt from the correct type", ()=>{
        expect(isSymmetric(['z',12,8,1])).to.be.false;
    });
    it("should return true for symmetric array", ()=>{
        expect(isSymmetric([])).to.be.true;
    });
    it("should return false for a nonsymmetric array", ()=>{
        expect(isSymmetric([1,2,3,4])).to.be.false;
    })
})