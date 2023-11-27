import React, { Fragment, useState, useRef } from "react";


import './ExpenseForm.css'
import Error from "../UI/Error";
//import ExpenseDate from "../Expenses/ExpenseDate";
//import Card from "../UI/Card";


const ExpenseForm = (props) => {
    console.log('Expense form component')


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

        // Anna selgitab - koigepealt loeme sisestatud andmed

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        // kontrollime need konsoolis - lihtsalt me naeme, mis on sisestatud
        console.log('enteredTitle', enteredTitle)
        console.log('enteredAmount', enteredAmount)
        console.log('enteredAmount', enteredAmount)


        // kui sisestatud valjad on ilma sisuta, maarame veateade

        if(enteredTitle.trim().length  === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
            setError(
                {
                    title: 'Invalid input',
                    //message: 'Please enter a valid title or amount or date (non-empty values)'
                    message: 'Please insert data'
                }
            )
            return // kui viga tekkib, siis jargmised kontrollid tuleb maha suruda ja minna otse komponendi kuvamisele
        }

        console.log(error)

        // kui aga koik andmetega on ok - valmistame nendest loetud andmete objekt

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        } 
    
        // 12.ndal lehel 9.ndas ülesandes tehtud muudatus    
        console.log('expenseData', expenseData)
        
        // ja saadame NewExpense komponendile loetud andmed

        props.onSaveExpenseData(expenseData)
        
        // sisestusvaljad tyhistame vaartustest
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''

        
        // setEnteredTitle('')
        // setEnteredAmount('')
        // setEnteredDate('')
    
        // sellega vormi saatmise haldusfunktsioon lopetab oma tood
    }

    const onReset = () => {
        setError(null)
        props.onReset()
    }
    

    // see on eraldi haldusfunktsioon, seega see ei saa olla saatmishaldus funktsiooni sees
    //Hoia silm peal
    const errorHandler = () => {
        //kontrollin 5 
        console.log('kontrollin 5')
        setError(null)
    }
    
    // kontrollime meateade olemasolu ja kuvame selle konsoolis - kas error haldusfunktsioon pani midagi labi vormi saatmise
    // haldusfunktsiooni - read 55-61 if lause t88
    console.log(error)

    // jargmisena laseme juba komponendi kuvamise osa t88le, k6ik yhe return lausega



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
                        <button type="button" onClick={onReset}>Cancel</button>
                    </div> 
                </form>
            </div>
        </Fragment>
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