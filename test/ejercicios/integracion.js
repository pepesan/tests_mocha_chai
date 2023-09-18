const sinon=require("sinon");
const expect=require("chai").expect;
var myAPI = {
    add: (a, b, callback) => {
        return callback(a + b);
    },
};

describe("Blog",()=>{

    it("should call callback",()=>{
        const callbackSpy=sinon.spy();
        myAPI.add(1,2,callbackSpy);
        expect(callbackSpy.callCount).to.be.eq(1);
        expect(callbackSpy.called).to.be.true;

    })
    it("should call callback",()=>{
        const callbackStub=sinon.stub();
        myAPI.add(1,2,callbackStub);
        expect(callbackStub.callCount).to.be.eq(1);

    })
    it("should call callback and return value", () => {
        const callbackStubWithReturns = sinon.stub().returns(3);
        const result = myAPI.add(1, 2, callbackStubWithReturns);
        expect(callbackStubWithReturns.callCount).to.be.eq(1);
        expect(result).to.be.eq(3);
    });
    it("should call the mock", () => {
        const mock = sinon.mock(myAPI);
        mock.expects("add").once().returns(3);
        const result = myAPI.add(1, 2, () => {});
        expect(result).to.be.eq(3);
        mock.verify();
    });
})
