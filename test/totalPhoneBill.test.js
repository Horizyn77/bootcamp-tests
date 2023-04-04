describe("Testing totalPhoneBill", function() {
    it("should return R7.45 when 2 calls and 3 sms's is passed", function() {
        assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));
    });
    it("should return R3.40 when 1 call and 1 sms is passed", function() {
        assert.equal("R3.40", totalPhoneBill("call, sms"));
    });
    it("should return R1.30 when 2 sms's is passed", function() {
        assert.equal("R1.30", totalPhoneBill("sms, sms"));
    });
});