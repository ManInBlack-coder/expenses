import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')
    
    console.log('Year data in Expenses.js' + filteredYear)

    const filterChangedHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }

    

  //votsin valja need returnist 
//<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
//<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
    
    return (
        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onChangeFilter={filterChangedHandler}></ExpensesFilter>
            
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem
            
                        id={expense.id}
                        title={expense.expense}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>  
                    }) 
            }             
 
        </Card>

    
    )


} 


export default Expenses


