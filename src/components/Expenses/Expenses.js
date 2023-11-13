import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    
    const [expenseFilter, setExpenseFilter] = useState('2023')
    const addExpenseFilterHandler = (expenseFilter) => {
        console.log('In Expenses.js')
        console.log(expenseFilter)
        setExpenseFilter(expenseFilter)
      }
    console.log('Year data in Expenses.js' + expenseFilter)

    const filterChangedHandler = (filteredYear) => {
        console.log('Filter change handled by Expenses.js')
        console.log(expenseFilter + ' in Expenses.js')
        setExpenseFilter(expenseFilter)
    }

  
  //votsin valja need returnist 
//<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
//<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
    
    return (
        
        <Card className="expenses">
            <ExpensesFilter selected={expenseFilter}
            onChangeFilter={filterChangedHandler}
            onAddExpenseFilter={addExpenseFilterHandler}
            ></ExpensesFilter>
            
            {
                props.expenses.map((expense) => {
                   // Lisasin IF statementi, mis annab vastava aasta andmed mulle ette
                   // ja kui neid pole , siis  annab mitte midagi (null)
                    
                   if (expense.date.getFullYear().toString() === expenseFilter){
                        return <ExpenseItem
            
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>  
                    } 
                    
                
                    else {
                        return null}
                    
                    }) 
            }             
 
        </Card>

    
    )


} 


export default Expenses


