describe("Testing isWeekday", function() {
    it("should return true when a weekday is passed", function() {
        assert.equal(true, isWeekday("Monday"));
    });
    it("should return true when a different weekday is passed", function() {
        assert.equal(true, isWeekday("Wednesday"));
    });
    it("should return false when a weekend is passed", function() {
        assert.equal(false, isWeekday("Sunday"));
    });
});