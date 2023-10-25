// Please do not change the name of this function
function changeCalculator(amount) {
    const denominations = [
      { name: "50", value: 50 },
      { name: "20", value: 20 },
      { name: "10", value: 10 },
      { name: "5", value: 5 },
      { name: "2", value: 2 },
      { name: "1", value: 1 }
    ];
  
    return denominations.reduce((acc, denom) => {
      let numOfCoins = Math.floor(amount / denom.value);
      if (numOfCoins > 0) {
        acc[denom.name] = numOfCoins;
        amount -= numOfCoins * denom.value;
      }
      return acc;
    }, {});
  }
  
  
  module.exports = changeCalculator;