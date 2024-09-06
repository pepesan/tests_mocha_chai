import { expect } from 'chai';
import {greet} from "../app/greets.js";
import sinon from "sinon";

describe("testing the greeter", function() {
    it("checks the greet function", function() {
        var clock = sinon.useFakeTimers(new Date(2021, 0, 15));
        expect(greet('Alice')).to.equal('Hello, Alice! Today is Friday, January 15, 2021');
        clock.restore();
    });
});
