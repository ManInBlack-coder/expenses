import React, { useState } from "react";


import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formEdit, setFormEdit] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            Id: Math.random().toString()
           
            
        } 
        props.onAddExpense(expenseData)
        endFormEdit()
        

        
    } 

    const startFormEdit = () => {
        setFormEdit(true)
    }

    const endFormEdit = () => {
        setFormEdit(false)
    }
    return (
        <div className="new-expense">
            {!formEdit && <button onClick={startFormEdit}>add new expense</button>}
            {formEdit && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onReset={endFormEdit}></ExpenseForm>}
        </div>
        // SaveExpenseDataHandler oli ennem OnSaveExpenseDataHandler
    )
} 

export default NewExpense

