import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };

      const [click,setClick]=useState(0);
      function clickHandler(){
        setClick(1);
      }
    
     function editingoff  (){
      setClick(0);
     }

  return (
    <div className='new-expense'>
     
      {click===1 ? <ExpenseForm onCancel={editingoff} onSaveExpenseData={saveExpenseDataHandler}/>: <button onClick={clickHandler}>Add New Expense</button>}
      
    </div>
  );
};

export default NewExpense;
