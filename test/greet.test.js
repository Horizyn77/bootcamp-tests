describe("Testing greet", function(){
    it('should show "Hello, Hidaayat" when the function is passed with "Hidaayat"', function(){
        assert.equal("Hello, Hidaayat", greet("Hidaayat"));
    });
    it('should show "Hello, Raadiyah" when the function is passed with "Raadiyah"', function(){
        assert.equal("Hello, Raadiyah", greet("Raadiyah"));
    });
    it('should show "Hello, Ngomso" when the function is passed with "Ngomso"', function(){
        assert.equal("Hello, Ngomso", greet("Ngomso"));
    });
});