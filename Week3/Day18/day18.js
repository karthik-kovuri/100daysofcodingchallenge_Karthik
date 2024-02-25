function createFinanceTracker() {
    let totalIncome = 0;
    let totalExpenses = 0;
    const addIncome = (amount) => {
        totalIncome += amount;
    };
    const addExpense = (amount) => {
        totalExpenses += amount;
    };

    const calculateBalance = () => {
        return totalIncome - totalExpenses;
    };

    return {
        addIncome,
        addExpense,
        calculateBalance,
    };
}
const myFinanceTracker = createFinanceTracker();
myFinanceTracker.addIncome(1000);
myFinanceTracker.addExpense(500);
myFinanceTracker.addIncome(200);
myFinanceTracker.addExpense(300);
const balance = myFinanceTracker.calculateBalance();
console.log(`Balance: $${balance.toFixed(2)}`);
