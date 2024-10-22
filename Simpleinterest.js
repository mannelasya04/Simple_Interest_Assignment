function calculateSimpleInterest(principalAmount, tenure, rateOfInterest) {
    // Calculate the simple interest using the formula
    const simpleInterest = (principalAmount * tenure * rateOfInterest) / 100;
    return simpleInterest;
  }
  
  // Example usage:
  const principal = 5000;
  const tenure = 1;
  const rate = 2.5;
  const interest = calculateSimpleInterest(principal, tenure, rate);
  console.log("Simple Interest:", interest);