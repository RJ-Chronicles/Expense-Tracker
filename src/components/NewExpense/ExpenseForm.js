import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate]=useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData ={
            title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                 <div className="new-expense__controls">
                     <div className="new-expense__control">
                         <label>Title</label>
                         <input 
                             type="text" 
                             value={title}
                             onChange={titleChangeHandler} />
                     </div>
                     <div className="new-expense__control">
                         <label>Amount</label>
                         <input 
                             type="number" 
                             min="0.01" step="0.01" 
                             value={amount}
                             onChange={amountChangeHandler} />
                     </div>
                     <div className="new-expense__control">
                         <label>Title</label>
                         <input type="date"
                             min="2019-01-01" max="2022-12-31" 
                             value={date}
                             onChange={dateChangeHandler} />
                     </div>
   
                     <div className="new_expense__actions">
                          <button onClick={props.onCancelExpenseData} type="button">Cancel</button>
                         <button type="submit">Add Expense</button>
                     </div>
                 </div>
             </form>   
            
            
        </div>
    )
}
export default ExpenseForm;























//  // const titleChangeHandler= (event)=>{
//     //     setTitle(event.target.value);
//     //     console.log(title);
//     // }
//     // const amountChangeHandler=(event)=>{
//     //     setAmount(event.target.value)
//     //     console.log(amount);
//     // }
//     // const dateChangeHandler= (event)=>{
//     //     setDate(event.target.date);
//     //     console.log(date);
//     // }

//     // const [userInput, setUserEnput] = useState({
//     //     title: '',
//     //     amount: '',
//     //     date: ''
//     // });

//     const titleChangeHandler = (event) => {
//         setTitle(event.target.value)
//         // setUserEnput({
//         //     ...userInput,
//         //     title: event.target.value
//         // })
//         // setUserEnput((prevState)=>{
//         //     return {...prevState, title: event.target.value}
//         // })
//     }
//     const amountChangeHandler=(event)=>{
//         setAmount(event.target.value);
//         // setUserEnput({
//         //     ...userInput,
//         //     amount: event.target.value
//         // })
//     }

    // const [flag, setFlag]= useState(true);
    // const handleFlag= ()=>{
    //     setFlag(false);
    // }
    // const handleFlagCancel = () =>{
    //     props.onCancelExpenseData();
    //     setFlag(true);
    // }