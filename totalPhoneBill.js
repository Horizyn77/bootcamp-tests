function totalPhoneBill(callsAndSmss) {
	var callsAndSmssArray = callsAndSmss.split(",");
  	var callCount = 0;
  	var smsCount = 0;
  
  	for (var i = 0; i < callsAndSmssArray.length; i++) {
    	callsAndSmssArray[i] = callsAndSmssArray[i].trim();
      
      	if (callsAndSmssArray[i] === "call") {
        	callCount++;
        } else if (callsAndSmssArray[i] === "sms") {
        	smsCount++;
        }
    }
  
    var callCost = callCount * 2.75;
    var smsCost = smsCount * 0.65;
  	var totalCost = callCost + smsCost;
  
  return "R" + totalCost.toFixed(2);
}