// https://calculator.swiftutors.com/gordon-growth-model-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const stockValueRadio = document.getElementById('stockValueRadio');
const expectedDividendPerShareAfter1YearRadio = document.getElementById('expectedDividendPerShareAfter1YearRadio');
const requiredRateofReturnforEquityInvestorRadio = document.getElementById('requiredRateofReturnforEquityInvestorRadio');
const growthRateinDividendsRadio = document.getElementById('growthRateinDividendsRadio');

let stockValue;
let expectedDividendPerShareAfter1Year = v1;
let requiredRateofReturnforEquityInvestor = v2;
let growthRateinDividends = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

stockValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Expected Dividend Per Share After 1 Year (D)';
  variable2.textContent = 'Required Rate of Return for Equity Investor (k)';
  variable3.textContent = 'Growth Rate in Dividends (G)';
  expectedDividendPerShareAfter1Year = v1;
  requiredRateofReturnforEquityInvestor = v2;
  growthRateinDividends = v3;
  result.textContent = '';
});

expectedDividendPerShareAfter1YearRadio.addEventListener('click', function() {
  variable1.textContent = 'Stock Value (P)';
  variable2.textContent = 'Required Rate of Return for Equity Investor (k)';
  variable3.textContent = 'Growth Rate in Dividends (G)';
  stockValue = v1;
  requiredRateofReturnforEquityInvestor = v2;
  growthRateinDividends = v3;
  result.textContent = '';
});

requiredRateofReturnforEquityInvestorRadio.addEventListener('click', function() {
  variable1.textContent = 'Stock Value (P)';
  variable2.textContent = 'Expected Dividend Per Share After 1 Year (D)';
  variable3.textContent = 'Growth Rate in Dividends (G)';
  stockValue = v1;
  expectedDividendPerShareAfter1Year = v2;
  growthRateinDividends = v3;
  result.textContent = '';
});

growthRateinDividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Stock Value (P)';
  variable2.textContent = 'Expected Dividend Per Share After 1 Year (D)';
  variable3.textContent = 'Required Rate of Return for Equity Investor (k)';
  stockValue = v1;
  expectedDividendPerShareAfter1Year = v2;
  requiredRateofReturnforEquityInvestor = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(stockValueRadio.checked)
    result.textContent = `Stock Value = ${computeStockValue().toFixed(2)}`;

  else if(expectedDividendPerShareAfter1YearRadio.checked)
    result.textContent = `Expected Dividend Per Share After 1 Year = ${computeExpectedDividendPerShareAfter1Year().toFixed(2)}`;

  else if(requiredRateofReturnforEquityInvestorRadio.checked)
    result.textContent = `Required Rate of Return for Equity Investor = ${computeRequiredRateofReturnforEquityInvestor().toFixed(2)}`;

  else if(growthRateinDividendsRadio.checked)
    result.textContent = `Growth Rate in Dividends = ${computeGrowthRateinDividends().toFixed(2)}`;
})

// calculation

function computeStockValue() {
  return Number(expectedDividendPerShareAfter1Year.value) / (Number(requiredRateofReturnforEquityInvestor.value) - Number(growthRateinDividends.value));
}

function computeExpectedDividendPerShareAfter1Year() {
  return Number(stockValue.value) * (Number(requiredRateofReturnforEquityInvestor.value) - Number(growthRateinDividends.value));
}

function computeRequiredRateofReturnforEquityInvestor() {
  return (Number(expectedDividendPerShareAfter1Year.value) / Number(stockValue.value)) + Number(growthRateinDividends.value);
}

function computeGrowthRateinDividends() {
  return Number(requiredRateofReturnforEquityInvestor.value) - (Number(expectedDividendPerShareAfter1Year.value) / Number(stockValue.value));
}