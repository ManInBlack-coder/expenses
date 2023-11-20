import React, { useState } from "react";


import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formEdit, startFormEdit] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            Id: Math.random().toString()
           
            
        } 
        props.onAddExpense(expenseData)
        
        const startFormEdit = () => {
            startFormEdit(true)
        }

        const endFormEdit = () => {
            startFormEdit(false)
        }

       
        
        
    } 
   
    return (
        <div className="new-expense">
            {!formEdit && <button onClick={startFormEdit}>add new expense</button>}
            {formEdit && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>}
        </div>
        // SaveExpenseDataHandler oli ennem OnSaveExpenseDataHandler
    )
} 

export default NewExpense

