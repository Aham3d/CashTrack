function deleteOrEdit(event){
  const targetBtn = event.target;

  const entry = targetBtn.parentNode;

  if( targetBtn.id == DELETE ){
      deleteEntry(entry);
  }else if(targetBtn.id == EDIT ){
      editEntry(entry);
  }
}

function deleteEntry(entry){
  ENTRY_LIST.splice( entry.id, 1);

  updateUI();
}

function editEntry(entry){
  console.log(entry)
  let ENTRY = ENTRY_LIST[entry.id];

  if(ENTRY.type == "income"){
      incomeAmount.value = ENTRY.amount;
      incomeTitle.value = ENTRY.title;
  }else if(ENTRY.type == "expense"){
      expenseAmount.value = ENTRY.amount;
      expenseTitle.value = ENTRY.title;
  }

  deleteEntry(entry);
}

function updateUI(){
  income = calculateTotal("income", ENTRY_LIST);
  outcome = calculateTotal("expense", ENTRY_LIST);
  balance = Math.abs(calculateBalance(income, outcome));

  // DETERMINE SIGN OF BALANCE
  let sign = (income >= outcome) ? "$" : "-$";

  // UPDATE UI
  balanceEl.innerHTML = `<small>${sign}</small>${balance}`;
  outcomeTotalEl.innerHTML = `<small>$</small>${outcome}`;
  incomeTotalEl.innerHTML = `<small>$</small>${income}`;

  clearElement( [expenseList, incomeList, allList] );

  ENTRY_LIST.forEach( (entry, index) => {
      if( entry.type == "expense" ){
          showEntry(expenseList, entry.type, entry.title, entry.amount, index)
      }else if( entry.type == "income" ){
          showEntry(incomeList, entry.type, entry.title, entry.amount, index)
      }
      showEntry(allList, entry.type, entry.title, entry.amount, index)
  });

  updateChart(income, outcome);

  localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id){

  const entry = ` <li id = "${id}" class="${type}">
                      <div class="entry">${title}: $${amount}</div>
                      <div id="edit"></div>
                      <div id="delete"></div>
                  </li>`;

  const position = "afterbegin";

  list.insertAdjacentHTML(position, entry);
}

function clearElement(elements){
  elements.forEach( element => {
      element.innerHTML = "";
  })
}

function calculateTotal(type, list){
  let sum = 0;

  list.forEach( entry => {
      if( entry.type == type ){
          sum += entry.amount;
      }
  })

  return sum;
}

function calculateBalance(income, outcome){
  return income - outcome;
}

function clearInput(inputs){
  inputs.forEach( input => {
      input.value = "";
  })
}
function show(element){
  element.classList.remove("hide");
}

function hide( elements ){
  elements.forEach( element => {
      element.classList.add("hide");
  })
}

function active(element){
  element.classList.add("active");
}

function inactive( elements ){
  elements.forEach( element => {
      element.classList.remove("active");
  })
}