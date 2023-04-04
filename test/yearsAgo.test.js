describe("Testing yearsAgo", function() {
    it("should return how many years ago the year passed in is from the current year", function() {
        assert.equal(7, yearsAgo(2016));
    });
    it("should return how many years ago a different year passed in is from the current year", function() {
        assert.equal(51, yearsAgo(1972));
    });
    it("should return how many years ago another different year passed in is from the current year", function() {
        assert.equal(20, yearsAgo(2003));
    });
});