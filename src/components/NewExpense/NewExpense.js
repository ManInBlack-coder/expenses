import React from "react";


import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            Id: Math.random().toString()
           
            
        } 
        props.onAddExpense(expenseData)
       
        
        
    } 
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
        </div>
        // SaveExpenseDataHandler oli ennem OnSaveExpenseDataHandler
    )
} 

export default NewExpense

