function getIncome() {
    const income = document.getElementById("totalIncome");
    const getTotalIncome = parseFloat(income.value);
    return getTotalIncome;
}

function getExpense() {
    const food = document.getElementById("food");
    const rent = document.getElementById("rent");
    const clothe = document.getElementById("clothe");
    const totalExpense = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothe.value);
    return totalExpense.toFixed(2);
}   

function getBalance() {
    const expense = getExpense();
    const income  = getIncome();
    if (expense > income) {
        return 0;
    }
    else {
        const balance = income - expense;
        return balance.toFixed(2);
    }
}

function getSaving() {
    const income  = getIncome();
    const balance = getBalance();
    const save = document.getElementById("save");
    const saving = (parseFloat(save.value) / 100) * income;
    if (balance === 0) {
        return 0;
    }
    else {
        if (saving > balance) {
            alert("you have not enough money to save")
            const amountToSave = document.getElementById("total-saving");
            amountToSave.innerText = 0;
        }
        else {
            return saving;
        }
    }
}

function getRestBalance() {
    const saving = getSaving();
    const previousBalance = getBalance();
    const restBalance = (previousBalance - saving).toFixed(2); 
    if (isNaN(restBalance)) {
        return 0;
    }
    else {
        return restBalance;
    }
}

document.getElementById("total-calculate").addEventListener("click", () => {
    const setTotalExpense = document.getElementById("total-expense");
    const setRestBalance = document.getElementById("rest-balance");
    setTotalExpense.innerText = getExpense();
    setRestBalance.innerText = getBalance();
})

document.getElementById("total-save").addEventListener("click", () => {
    const setTotalSaving = document.getElementById("total-saving");
    const setRemainBalance = document.getElementById("remain-balance");
    setTotalSaving.innerText = getSaving();
    setRemainBalance.innerText = getRestBalance();
})
