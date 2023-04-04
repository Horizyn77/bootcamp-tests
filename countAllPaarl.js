function countAllPaarl(regNumbers) {
	var regNumbersArray = regNumbers.split(",")
    var count = 0;
    
    for (var i = 0; i < regNumbersArray.length; i++) {
    	regNumbersArray[i] = regNumbersArray[i].trim();
      	
     	if (regNumbersArray[i].startsWith("CJ")) {
            count++;
        }
    }
  return count;
}