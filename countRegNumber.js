function countRegNumber(regNumbers) {
    var numberOfRegNums = regNumbers.split(",").length;
    if (regNumbers === "") {
      return 0;
    } 
    return numberOfRegNums;
  }