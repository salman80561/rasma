import React from 'react';
import './ExpenseForm.css';

const Expenseform = ()  => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    };

    return (
     <form>
        <div className = "newexpense-controls">
            <div className = "newexpense-control">
                <label>Title</label>
                <input type ='text' onChange = {titleChangeHandler} />
            </div>
            <div className = "newexpense-control">
                <label>Amount</label>
                <input type ='number' min= "0.01"  step ="0.01" />
            </div>
            <div className = "newexpense-control">
                <label>Date</label>
                <input type ='date' min= "2019-01-01"  max ="2022-12-12" />
            </div>

        </div>
        <div className = "new-expense__actions">
            <button type = "submit">Add Expense</button>
        </div>
        </form>
    );
};


export default Expenseform