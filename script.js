function calculate() {
    // Get input values
    const principal = parseFloat(document.getElementById("principal").value);
    const monthlyInvestment = parseFloat(document.getElementById("monthly-investment").value);
    const rateOfInterest = parseFloat(document.getElementById("rate-of-interest").value);
    const timePeriod = parseInt(document.getElementById("time-period").value);
  
    // Calculate maturity amount
    const rateOfInterestPerMonth = rateOfInterest / 1200;
    let totalInvestment = principal;
    for (let month = 1; month <= timePeriod; month++) {
      totalInvestment += monthlyInvestment;
      totalInvestment *= (1 + rateOfInterestPerMonth);
    }
    const maturityAmount = Math.round(totalInvestment * 100) / 100;
  
    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The maturity amount after ${timePeriod} months is <strong>${maturityAmount}</strong> Rs.`;
  }
  
  