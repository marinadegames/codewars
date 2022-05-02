function rentalCarCost(d) {

    let oneDayPrice = 40;
    let sum;
    
    if (d < 3){
      sum = oneDayPrice * d;
    }else if (d >= 3 && d < 7){
      sum = oneDayPrice * d - 20;
    }else if (d >= 7){
      sum = oneDayPrice * d - 50;
    }
    return sum;
  }

    //successful