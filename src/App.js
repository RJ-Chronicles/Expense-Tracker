import ExpenseItem from './components/ExpenseItem'
import expenses from './components/ExpenseData'
import Expense from './components/Expenses'
function App() {
  return (
    <div>
      <h1>Hello react</h1>
      <p>This will also visible</p>
      {/* {expenses.map((expense)=>{
        <ExpenseItem date = {expense.date}
                      title = {expense.expenseTitle}
                      amount= {expense.expenseAmount}
        />
      })} */}

      <ExpenseItem date={expenses[0].expenseDate}
        title={expenses[0].expenseTitle}
        amount={expenses[0].expenseAmount} />
      <ExpenseItem date={expenses[1].expenseDate}
        title={expenses[1].expenseTitle}
        amount={expenses[1].expenseAmount}
      />

      <Expense date={expenses[2].expenseDate}
        title={expenses[2].expenseTitle}
        amount={expenses[2].expenseAmount}
      />

    </div>
  );
}

export default App;
