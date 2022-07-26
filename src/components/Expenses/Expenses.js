import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChar';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredArray= props.expenses.filter((expense)=> expense.date.getFullYear().toString() === filteredYear);
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onSaveExpenseFilter={filterChangeHandler} 
                />
                <ExpensesChart expenses={filteredArray}/>
                <ExpensesList items={filteredArray}/>

            </Card>
        </div>
    )
}

export default Expenses;









