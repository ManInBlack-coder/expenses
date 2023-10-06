import App from "../App"
import ExpenseItem from "./ExpenseItem"


function Expenses(props) {
    console.log(props)
    
    return(
        <div className="expenses">
            <ExpenseItem expenseData={props.
            expensesData[0] }/>
            <ExpenseItem expenseData={props.
            expensesData[1]}/>  
        </div>
    )
} 
export default Expenses