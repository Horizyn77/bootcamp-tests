function countRegNumber(regNumbers) {
    var numberOfRegNums = regNumbers.split(",").length;
    return numberOfRegNums;
  }
  
  console.log(countRegNumber('CA 42665, AA 12 RT GP'));