const input = require('sync-input');

console.log("Earned amount:");
const items = [
  { name: "Bubblegum", amount: 202 },
  { name: "Toffee", amount: 118 },
  { name: "Ice cream", amount: 2250 },
  { name: "Milk chocolate", amount: 1680 },
  { name: "Doughnut", amount: 1075 },
  { name: "Pancake", amount: 80 }
];

// Display each item and its amount
items.forEach(item => {
  console.log(`${item.name}: $${item.amount}`);
});

// Calculate total income
const totalIncome = items.reduce((acc, item) => acc + item.amount, 0);
console.log(`Income: $${totalIncome}.0`);

// Prompt for staff expenses and other expenses
console.log("Staff expenses:");
const staffExpenses = Number(input());
console.log("Other expenses:");
const otherExpenses = Number(input());

// Calculate net income
const netIncome = totalIncome - staffExpenses - otherExpenses;
console.log(`Net income: $${netIncome}`);
