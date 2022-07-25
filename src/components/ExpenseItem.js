import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    // const expenseDate= new Date(2022,7,25);
    // const expenseTitle = "Car insurance";
    // const expenseAmount= 294.67;
    // //{expenseDate.toISOString()}
    return (
        <div className='expense-item'>
            <ExpenseDate date ={props.date}/>
            <div className='expense-item__description'>
                <h2 >{props.title}</h2>
                <div className='expense-item__price'>$ {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;