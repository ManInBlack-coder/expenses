import React, { useState } from "react";


import './ExpenseForm.css'
import ExpenseDate from "../Components/ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
    
    const [title,setTitle]  = useState(props.expenseData.title)
    
    const clickHandler = () => {
        setTitle('Uptd')
        console.log(title)

    }    
    
    
    //const [enteredTitle,setEnteredTitle] = useState('')
    //const [enteredAmount, setEnteredAmount] = useState('')
    //const [enteredDate,setEnteredDate] = useState('')  
    
   /* console.log(enteredTitle)  */
    
    //const titleChangeHandler = (event) => {
      //  setEnteredTitle(event.target.value)
    //}  

    //const amountChangeHandler = (event) => {
      //  setEnteredAmount(event.target.value)
    //}  

    //const dateChangeHandler = (event) => {
      //  setEnteredDate(event.target.value)
    //} 


    //const submitHandler = (event) => {
      //  event.preventDefault()
        //const expenseData = {
            //title: enteredTitle,
          //  amount: enteredAmount,
        //    date: new Date(enteredDate)
      //  } 
    //} 



    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate> 
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
            <button onClick={clickHandler}>CHange</button>
        </Card>
        
        //<form>
          //  <div className="new-expense__controls">
            //    <div className="new-expense__control">
              //      <label>Title</label>
                //    <input type="text" onChange={props.expenseData.date} />
                //</div>
                //<div className="new-expense__control">
                  //  <label>Amount</label>
                    //<input type="number" min="1" step="1" onChange={props.expenseData.form}/>
                //</div>
                //<div className="new-expense__control">
                  //  <label>Date</label>
                    //<input type="date" min="2023-01-18" max="2025-12-31" 
                    //onChange={props.expenseData.price}/>
               // </div>
           // </div>
            //<div className="new-expense__actions"> 
              //  <button onClick={clickHandler}>Change title</button>  
           // </div>
       // </form>
    )
}  

export default ExpenseItem