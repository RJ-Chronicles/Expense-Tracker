import React,{useState} from 'react';
import Expense from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const App=()=> {
  const   DUMMY_EXPENSES = [{
    id:101,
    date: new Date(2022,3,14),
    title:'Car insurance',
    amount:90
  },
  {
    id:102,
    date: new Date(2007,6,4),
    title:'Bike insurance',
    amount:40
  },
  {id:103,
    date: new Date(2012,3,24),
    title:'Bus insurance',
    amount:90
  }
  ]
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler= expense=>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses]
    });
  }
  return (
    <div>     
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense expenses={expenses}/>
      
    </div>
  );
}

export default App;











  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expense, {expenses: expenses})
  // );
