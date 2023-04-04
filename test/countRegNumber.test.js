describe("Testing countRegNumber", function(){
    it("should return 3 when passed with 3 registration numbers", function(){
        assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });
    it("should return 1 when passed with 1 registration number", function(){
        assert.equal(1, countRegNumber("CA 182736"));
    });
    it("should return 5 when passed with 5 registration numbers", function(){
        assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328,CA 42665,AA 12 RT GP"));
    });
});