import './Expenses.css'
//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    
    const [expenseFilter, setExpenseFilter] = useState('2023')

    const addExpenseFilterHandler = (expenseFilter) => {
        console.log('In Expenses.js')
        console.log(expenseFilter)
        setExpenseFilter(expenseFilter)
      }
    //console.log('Year data in Expenses.js' + expenseFilter)

  
    

    const filteredExpenses = props.expenses.filter(
        (expense) => {
        return new Date(expense.date).getFullYear().toString() === expenseFilter
    }
    )

    console.log(filteredExpenses)

  
    return (
        
        <Card className="expenses">
            <ExpensesFilter 
            
           
            
            onAddExpenseFilter={addExpenseFilterHandler}/>
            
    
            <ExpensesList filteredExpenses={filteredExpenses} 
            isLoading={props.isLoading}/>
                
            
        </Card>

    
    )


} 


export default Expenses


