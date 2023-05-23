
// EVENT LISTENERS
expenseBtn.addEventListener("click", function(){
  show(expenseEl);
  hide( [incomeEl, allEl] );
  active( expenseBtn );
  inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function(){
  show(incomeEl);
  hide( [expenseEl, allEl] );
  active( incomeBtn );
  inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function(){
  show(allEl);
  hide( [incomeEl, expenseEl] );
  active( allBtn );
  inactive( [incomeBtn, expenseBtn] );
})

addExpense.addEventListener("click", function(){
  // IF ONE OF THE INPUTS IS EMPTY => EXIT
  if(!expenseTitle.value || !expenseAmount.value ) return;

  // SAVE THE ENTRY TO ENTRY_LIST
  let expense = {
      type : "expense",
      title : expenseTitle.value,
      amount : parseInt(expenseAmount.value)
  }
  ENTRY_LIST.push(expense);

  updateUI();
  clearInput( [expenseTitle, expenseAmount] )
})

addIncome.addEventListener("click", function(){
  // IF ONE OF THE INPUTS IS EMPTY => EXIT
  if(!incomeTitle.value || !incomeAmount.value ) return;

  // SAVE THE ENTRY TO ENTRY_LIST
  let income = {
      type : "income",
      title : incomeTitle.value,
      amount : parseInt(incomeAmount.value)
  }
  ENTRY_LIST.push(income);

  updateUI();
  clearInput( [incomeTitle, incomeAmount] )
})

incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);