function findItemsOver20(list) {
	var itemsOver20 = [];
  
  	for (var i = 0; i < list.length; i++) {
    	if (list[i]["qty"] > 20) {
        	itemsOver20.push(list[i]);
        }
    }
	return itemsOver20;
}