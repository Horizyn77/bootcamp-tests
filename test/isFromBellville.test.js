describe("Testing isFromBellville", function() {
    it("should return true when a Bellville reg number is passed", function() {
        assert.equal(true, isFromBellville("CY 456"));
    });
    it("should return true when a different Bellville reg number is passed", function() {
        assert.equal(true, isFromBellville("CY 789"));
    });
    it("should return false when a non-Bellville reg number is passed", function() {
        assert.equal(false, isFromBellville("CK 123"));
    });
});