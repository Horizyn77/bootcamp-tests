describe("Testing countAllFromTown", function() {
    it("should return 3 when 3 registration numbers from Stellenbosch is passed", function() {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        
        assert.equal(3, fromStellies);
    });
    it("should return 1 when 1 registration number from Kuilsriver is passed", function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        
        assert.equal(1, fromKuilsriver);
    });
    it("should return 4 when 4 registration numbers from Bellville is passed", function() {
        var fromBellville = countAllFromTown('CY 124,CY 567,CY 345, CY 456,CL 341, CF 456','CY')
        
        assert.equal(4, fromBellville);
    });
    it("should return 0 when 0 registration numbers from Cape Town is passed", function() {
        var fromCapeTown = countAllFromTown('CY 124,CY 567,CY 345, CY 456,CL 341, CF 456','CA')
        
        assert.equal(0, fromCapeTown);
    });

});