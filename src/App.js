// Ülesanne 3 - Andmete suunamine (bottom-up) ja väärtuse hetkeseisu lugemine ning määramine (COMPLETED)

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


  // expenses => (DUMMY_EXPENSES)
const DUMMY_EXPENSES = [
    {  
      date: new Date(2023,0,10),
      title: 'New book',
      //price => (amount)
      amount: 30.88
    },
    {
      date: new Date(2023,0,10),
      title: 'New Jeans',
      //price => (amount)
      amount: 30.88
    }

    {
      date: new Date(2023,0,10),
      title: 'New bag',
      amount: 199.99
    } 
 
] 

const App = () => {
  const AddExpenseHandler = (expense) => {
    console.log('in app.js')
    console.log(expense)
  }

  // expensesData => (expenses)
  //(sulgudes) expenses => (DUMMY_EXPENSES)
  return (
    <div className='App'>
      <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
      <Expenses expenses={DUMMY_EXPENSES}></Expenses> 
  
    </div>
  );

  

} 

export default App;
