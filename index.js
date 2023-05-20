const balanceEl = document.querySelector('.balance .value'); 
const incomeTotalEl = document.querySelector('.outcome-total'); 
const outcomeTotalEl = document.querySelector('.income-total'); 
const chartEl = document.querySelector('.chart'); 
// toggle btns
const expenseBtn = document.querySelector('.tab1'); 
const incomeBtn = document.querySelector('.tab2'); 
const allBtn = document.querySelector('.tab3'); 
// area
const expenseEl = document.querySelector('#expense'); 
const incomeEl = document.querySelector('#income'); 
const allEL = document.querySelector('#all'); 
// list items
const incomeList = document.querySelector('#income .list'); 
const expenseList = document.querySelector('#expense .list'); 
const allList = document.querySelector('#all .list'); 
// inputs area
const addIncome = document.querySelector('.add-income');
const incomeTitle = document.querySelector('#income-title-input'); 
const incomeAmount = document.querySelector('#income-amount-input'); 

expenseBtn.addEventListener('click', function() {
  active(expenseBtn); 
  inactive([incomeBtn, allBtn]); 
  show(expenseEl); 
  hide([incomeEl, allEL]); 
});

incomeBtn.addEventListener('click', function() {
  active(incomeBtn);
  inactive([expenseBtn, allBtn]); 
  show(incomeEl); 
  hide([expenseEl, allEL]);
});

allBtn.addEventListener('click', function() {
  active(allBtn); 
  inactive([expenseBtn, incomeBtn]); 
  show(allEL); 
  hide([incomeEl, expenseEl]);
});
