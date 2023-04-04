function mostProfitableDepartment(data) {
	
    var count = {};
    
    for (var i = 0; i < data.length; i++) {
      var currentDepartment = data[i]["department"];
      
      if (count[currentDepartment] === undefined) {
          count[currentDepartment] = 0;
      }
      
      count[currentDepartment] += data[i]["sales"]
    }
      var highestTotal = 0;
        var result = "";
    
      for (var key in count) {
          if (count[key] > highestTotal) {
              highestTotal = count[key];
              result = key;
          }
      }
      return result;
  }
  
  function mostProfitableDay(data) {
      var count = {};
  
    for (var i = 0; i < data.length; i++) {
      var currentDay = data[i]["day"];
      
      if (count[currentDay] === undefined) {
          count[currentDay] = 0;
      }
      
      count[currentDay] += data[i]["sales"]
    }
      var highestTotal = 0;
        var result = "";
    
      for (var key in count) {
          if (count[key] > highestTotal) {
              highestTotal = count[key];
              result = key;
          }
      }
      return result;
  }