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

    props.expenses.map((expense) => {
        console.log(expense);
    }) 

   
    
    
    return (
        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear}
            onChangeFilter={filterChangedHandler}></ExpensesFilter>/
            <ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem
                        expenseData={expense}></ExpenseItem>  
                }) 
            }             

        </Card>


    
    )


} 


export default Expenses


