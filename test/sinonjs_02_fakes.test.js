const expect = require('chai').expect;
const greeter = require("../app/greets.js");
const sinon = require("sinon");

describe("testing the greeter", function() {
    it("checks the greet function", function() {
        var clock = sinon.useFakeTimers(new Date(2021, 0, 15));
        expect(greeter.greet('Alice')).to.equal('Hello, Alice! Today is Friday, January 15, 2021');
        clock.restore();
    });
});
