describe("Testing countAllPaarl", function() {
    it("should return 3 when passed with 3 registration numbers from Paarl", function() {
        assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    });
    it("should return 2 when passed with 3 registration numbers from Paarl", function() {
        assert.equal(2, countAllPaarl("CJ 345 123, CK 345, CJ 123"));
    });
    it("should return 5 when passed with 3 registration numbers from Paarl", function() {
        assert.equal(5, countAllPaarl("CJ 345 123, CJ 2345, CJ 123-546, CJ 345, CJ 123"));
    });
});