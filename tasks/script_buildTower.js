function towerBuilder(nFloors) {
    let starArray = [];
    for (let i = 0; i < nFloors; i++) {
        starArray.push(" ".repeat(nFloors - i - 1) + '*'.repeat((i*2)+1) + ' '.repeat(nFloors - i -1));
    }
    return starArray;
  }
  towerBuilder(5);