function getLoans() {
    let incomeFirstMonth = parseInt(document.getElementById('incomeFirstMonth').value);
    let givenIncome = parseInt(document.getElementById('givenIncome').value);
    let amountOfChildren = parseInt(document.getElementById('amountOfChildren').value);
    let isFamilyFull = document.getElementById('isFamilyFull').value;
    let resultBlocks = document.querySelectorAll('.result');
    let loanBlock = document.getElementById('loan');
    let loanMonthBlock = document.getElementById('loanMonth');
    let loanDec;
    let loan;

    console.log('before if statements - ', loan, incomeFirstMonth, amountOfChildren, isFamilyFull)

    if (amountOfChildren == 0) {
        loanDec = 600;
    } else if(amountOfChildren > 0 && isFamilyFull == 'true'){
        loanDec = 600 + (600 * amountOfChildren);
    } else if(amountOfChildren > 0 && isFamilyFull == 'false') {
        loanDec = 600 + (1200 * amountOfChildren);
    }

    if (loanDec > incomeFirstMonth) {
        loan = 0;
    } else if (givenIncome > 40000) {
        loan = 0.13 * (incomeFirstMonth);
    } else if (givenIncome < 40000) {
        loan = 0.13 * (incomeFirstMonth - loanDec);
    }

    console.log('after if statements - ', loan, incomeFirstMonth, amountOfChildren, isFamilyFull)

    if (!isNaN(document.getElementById('incomeFirstMonth').value) && document.getElementById('incomeFirstMonth').value.length > 0 && !isNaN(document.getElementById('givenIncome').value) && document.getElementById('givenIncome').value.length > 0) {
        if((document.getElementById('incomeFirstMonth').value) * -1 < 0 || (document.getElementById('givenIncome').value) * -1 < 0){
            loanBlock.value = loan;
            loanMonthBlock.value = incomeFirstMonth - loan;
            resultBlocks.forEach(block => block.style.display = "block");
        } else {
            alert('Ввод отрицательного числа запрещен');
            document.getElementById('incomeFirstMonth').value = '';
            document.getElementById('givenIncome').value = '';
        }
    } else {
        alert('Проверте правильность заполнения');
        document.getElementById('incomeFirstMonth').value = '';
        document.getElementById('givenIncome').value = '';
    }

    console.log('Подоходный налог: ', loan, ' Чистый доход за месяц: ', incomeFirstMonth - loan)
}
document.getElementById('submit').addEventListener('click', getLoans)