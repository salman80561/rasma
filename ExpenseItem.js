import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem =(props) =>{
  
  const clickHandler =() => {
    console.log('Updated');
  }
 
  
  return (
    <li><div className='expense-item'>
        <ExpenseDate date ={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <div className='expense-item__location'>{props.location}</div>
        </div>
        
        <button onClick ={clickHandler}>Update</button>
    </div></li>
  );
}

export default ExpenseItem;
