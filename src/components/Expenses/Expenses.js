import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    
    const addExpenseFilterHandler = (expensesFilter) => {
        console.log('in Expense.js')
        console.log(expensesFilter)
        
    } 

    
    return (
        
        <Card className="expenses">
            <ExpensesFilter addExpenseFilter={addExpenseFilterHandler}/>
            <ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
            

        </Card>


    
    )


} 


export default Expenses


