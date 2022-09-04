import React,{useState} from 'react';

import ExpenseItem from './ExpenseItems';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

const[filteredYear,setFilteredYear]=useState("2020");
const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
}

const filteredExpense = props.items.filter(expense =>
  {
    return expense.date.getFullYear().toString()=== filteredYear;
  });
  return (
    <Card className="expenses">
   <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
   {console.log(filteredExpense)}
   <ExpenseChart expense={filteredExpense}/>
   { filteredExpense.length===0  ? <p>there is no expense</p> : filteredExpense.map(expense => <ExpenseItem 
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>)}
   
     
    
      

    </Card>
  );
}

export default Expenses;
