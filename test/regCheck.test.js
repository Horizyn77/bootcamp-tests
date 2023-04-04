describe("Testing regCheck", function(){
    it("should return true if a GP, L, EC, MP registration plate is passed", function(){
        assert.equal(true, regCheck("DC 55 YU GP", "GP"));
    });
    it("should return true if a GP, L, EC, MP registration plate is passed", function(){
        assert.equal(true, regCheck("5566 L", "L"));
    });
    it("should return false if a non GP, L, EC, MP registration plate is passed", function(){
        assert.equal(false, regCheck("CY 189-012", "CY"));
    });
});