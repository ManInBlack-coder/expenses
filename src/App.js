
import './App.css';
import ExpenseItem from './Components/ExpenseItem'

function App(){
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

  return (
    <div className='App'>
      <ExpenseItem expenseData={expenses[0] }></ExpenseItem> 
      <ExpenseItem expenseData={expenses[1] } ></ExpenseItem>
    </div>
  );
  
  
  
  
  
  


  
  

} 

export default App;
