const stockPrices = [10, 5, 2, 3, 10];

// first daily percentage change in stock price 


let dailyPercentage = [];

// Calculate daily percentage changes
for (let i = 0; i < stockPrices.length - 1; i++) {
    const yesterday_price = stockPrices[i];
    const today_price = stockPrices[i + 1];
    const daily_percentage_change = ((today_price - yesterday_price) / yesterday_price) * 100;

    // Store the percentage changes in the array
    dailyPercentage.push(Math.round(daily_percentage_change * 100) / 100);
}

console.log("Daily percentage changes:");
for (let i = 0; i < dailyPercentage.length; i++) {
    console.log(`Day ${i + 1}: ${dailyPercentage[i]}%`);
}

const check = dailyPercentage[0];

console.log("Days with percentage increase:");
// Find the days where percentage goes up
for (let i = 0; i < dailyPercentage.length; i++) {
    if (check <= dailyPercentage[i]) {
        console.log(`Percentage increased on day ${i + 1}`);
    }
}
