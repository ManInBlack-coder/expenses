import React from "react";
import ExpenseItem from "./ExpenseItem";
//import Expenses from "./Expenses";
import "./ExpensesList.css";


const ExpensesList = (props) => {
    
    if(props.isLoading) {
        return <p className="expenses-list_fallback"><b>
            Fetching expenses data...</b></p>
    }
    
    let expensesContent = <p>No expenses found.</p>

    if(props.filteredExpenses.length > 0) {
        expensesContent = props.filteredExpenses.map((expense) => {
            
            return <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        })
    }

    return (
        <ul>
            <ul className="expenses-list">
            {expensesContent}
            </ul>
           
        </ul>
    )
} 

export default ExpensesList