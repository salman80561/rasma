import './ExpenseItem.css';

function ExpenseItem(props) {
  const date = props.date.toISOString();
  
  return (
    <div className='expense-item'>
      <div>{date}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div className='expense-item__location'>{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
