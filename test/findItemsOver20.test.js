describe("Testing findItemsOver20", function() {
    it("should return the 2 items that are over 20 when passed with 2 items over 20", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it("should return the 3 items that are over 20 when passed with 3 items over 20", function() {
        var itemList = [
            {name : 'apples', qty : 44},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'apples', qty : 44},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it("should return the 1 item that is over 20 when passed with 1 item over 20", function() {
        var itemList = [
            {name : 'apples', qty : 6},
            {name : 'pears', qty : 15},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'bananas', qty : 27}
        ];
        
        assert.deepEqual(results, findItemsOver20(itemList));
    });
});