describe("Testing fromWhere", function() {
    it("should return Bellville when a Bellville reg number is passed", function() {
        assert.equal("Bellville", fromWhere("CY 567489"));
    });
    it("should return Paarl when a Paarl reg number is passed", function() {
        assert.equal("Paarl", fromWhere("CJ 343502"));
    });
    it("should return Cape Town when a Cape Town reg number is passed", function() {
        assert.equal("Cape Town", fromWhere("CA 987504"));
    });
});