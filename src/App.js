
import './App.css';
//import ExpenseItem from './Components/ExpenseItem'
import Expenses from './Components/Expenses';
import NewExpense from './NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {  
      date: new Date(2023,0,10),
      title: 'New book',
      price: 30.88
    },
    {
      date: new Date(2023,0,10),
      title: 'New Jeans',
      price: 30.88
    }
 
] 

  const AddExpenseHandler = (expense) => {
    console.log('in app.js')
    console.log(expense)
  } 

  return (
    <div className='App'>
      <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
      <Expenses expensesData={expenses}></Expenses> 
    </div>
  );

  

} 

export default App;
