function countAllFromTown(regNumbers, regStart) {
	var regNumbersArray = regNumbers.split(",");
  	var count = 0;
  
  	for (var i = 0; i < regNumbersArray.length; i++) {
    	regNumbersArray[i] = regNumbersArray[i].trim();
      
      	if (regNumbersArray[i].startsWith(regStart)) {
        	count++;
        }
    }
  return count;
}