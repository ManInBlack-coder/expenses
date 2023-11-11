// Ülesanne 3 - Andmete suunamine (bottom-up) ja väärtuse hetkeseisu lugemine ning määramine (COMPLETED)
import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


  // expenses => (DUMMY_EXPENSES)
const DUMMY_EXPENSES = [
    {  
      id: 'e1',
      date: new Date(2023,0,10),
      title: 'New book',
      amount: 30.88
    },

    {
      id: 'e2',
      date: new Date(2023,0,10),
      title: 'New Jeans',
      amount: 30.88
    }

    
 
] 

const App = () => {
  const [expenses,setExpenses] = useState (DUMMY_EXPENSES) 
  
  const onAddExpenseHandler = (expense) => {
    console.log('in app.js')
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
      
    })
      
  }

  console.log(expenses)

  // expensesData => (expenses)
  //(sulgudes) expenses => (DUMMY_EXPENSES)
  return (
    <div className='App'>
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses> 
  
    </div>
  );

  

} 

export default App;
