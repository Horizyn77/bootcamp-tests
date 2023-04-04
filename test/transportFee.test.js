describe("Testing transportFee", function() {
    it("should return R20 when 'morning' is passed in", function() {
        assert.equal("R20", transportFee("morning"));
    });
    it("should return R10 when 'afternoon' is passed in", function() {
        assert.equal("R10", transportFee("afternoon"));
    });
    it("should return 'free' when 'nightshift' is passed in", function() {
        assert.equal("free", transportFee("nightshift"));
    });
});