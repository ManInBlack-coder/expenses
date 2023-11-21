import React, { Fragment, useState, useRef } from "react";


import './ExpenseForm.css'
import Error from "../UI/Error";
//import ExpenseDate from "../Expenses/ExpenseDate";
//import Card from "../UI/Card";


const ExpenseForm = (props) => {


    const [error, setError] = useState(null)
  
    // const [enteredTitle,setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate,setEnteredDate] = useState('')  
    

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()

  /*  
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }  

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }  

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    } 
 */

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value


        console.log(enteredTitle)
        console.log(enteredAmount)
        console.log(enteredDate)


        //Hoia silm peal
        const errorHandler = () => {
            setError(null)
        }
        console.log(error)

        if(enteredTitle.trim().length  === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            })
            return (
                
                <Fragment>
                    {error && (
                        <Error
                        title={error.title}
                        message={error.message}
                        onConfirm={errorHandler}
                        />)
                        
                    }
                    <div>
                        <form onSubmit={submitHandler}>
                            <div className="new-expense__controls">
                                <div className="new-expense__control">
                                    <label>Title</label>
                                    <input
                                    type="text"
                                    id="title"
                                    ref={titleInputRef}
                                />
                                </div>
                            </div>
                        </form>
                    </div>
                </Fragment>
            )
        }
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        } 
    
    // 12.ndal lehel 9.ndas ülesandes tehtud muudatus    
        //console.log(expenseData)
        
        props.onSaveExpenseData(expenseData)
        
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''

        
        // setEnteredTitle('')
        // setEnteredAmount('')
        // setEnteredDate('')
    }



    


    return (
      
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    {/*Tra ma ei tea mida teen enam*/}
                    <input
                    type="text"
                    id='text'
                    ref={titleInputRef}
                    />



                    {/* <input type="text" onChange={titleInputRef} /> */}


                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        id="amount"
                        ref={amountInputRef}
                    ></input>
                    {/* <input type="number" min="0.01" step="0.01" onChange={amountInputRef}/> */}
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min='2023-01-18'
                        max='2025-12-13'
                        id="date"
                        ref={dateInputRef}
                    ></input>
                    {/* <input type="date" min="2023-01-18" max="2025-12-31" 
                    onChange={dateInputRef}/> */}
                </div>
            </div>
            <div className="new-expense__actions"> 
                <button type="submit">Add Expense</button>  
                {/*Cancel nupp. 
                satin type veel paika*/}
                <button type="submit">Cancel</button>
            </div> 
        </form>

    )

    
}  

// const addNewEx = (props) => {

    

//     return (
//         <form onSubmit={submitHandler}>
//             <button>add new expense</button>
//         </form>
//     )
// }



export default ExpenseForm