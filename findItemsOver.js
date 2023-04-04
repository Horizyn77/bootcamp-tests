function findItemsOver(list, threshold) {
	var itemsOverThreshold = [];
  
	for (var i = 0; i < list.length; i++) {
		if (list[i]["qty"] > threshold) {
        	itemsOverThreshold.push(list[i]);
        }    
    }
	return itemsOverThreshold;
}