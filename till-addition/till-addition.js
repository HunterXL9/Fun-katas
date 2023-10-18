// Please do not change the name of this function
function tillAddition (cash) {
    const denominations = {
      "1p": 0.01,
      "2p": 0.02,
      "5p": 0.05,
      "10p": 0.10,
      "20p": 0.20,
      "50p": 0.50,
      "£1": 1.00,
      "£2": 2.00,
      "£5": 5.00,
      "£10": 10.00,
      "£20": 20.00,
      "£50": 50.00
    };
  
    let total = 0;
  
    for (let denom in cash) {
      total += denominations[denom] * cash[denom];
    }
  
    return `£${total.toFixed(2)}`;
  }
  
module.exports = tillAddition;
