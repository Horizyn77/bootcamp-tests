describe("Testing findItemsOver", function() {
    it("should return the 1 item that is over 30 when passed with an object that contains 1 item over 30 and the argument 30", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'pears', qty : 37}
        ];
        
        assert.deepEqual(results, findItemsOver(itemList, 30));
    });
    it("should return the 3 items that are over 15 when passed with an object that contains 3 items over 15 and the argument 15", function() {
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
        
        assert.deepEqual(results, findItemsOver(itemList, 15));
    });
    it("should return the 2 items that is over 10 when passed with an object that contains 2 item over 10 and the argument 10", function() {
        var itemList = [
            {name : 'apples', qty : 6},
            {name : 'pears', qty : 15},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'pears', qty : 15},
            {name : 'bananas', qty : 27}
        ];
        
        assert.deepEqual(results, findItemsOver(itemList, 10));
    });
});