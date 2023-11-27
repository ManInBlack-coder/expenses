// Ülesanne 3 - Andmete suunamine (bottom-up) ja väärtuse hetkeseisu lugemine ning määramine (COMPLETED)
import React, { /*{Fragment,}*/useEffect,useState} from 'react';
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
      title: 'New Jeans',
      date: new Date(2023,0,10),
      amount: 30.88
    },

    {
      id: 'e3',
      title: 'New mobile',
      date: new Date(2024,0,10),
      amount: 20.88
    },
    {
      id: 'e4',
      title: 'wife',
      date: new Date(2024,0,10),
      amount: 50.88
    }
  

    
 
] 

const App = () => {
  const [isFetching,setIsFetching] = useState(false)
  const [expenses,setExpenses] = useState ([])

  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)
  
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const response = await fetch('https://localhost:3005/expenses')
        const responseData = await response.json()
        if(!response.ok) {
          throw new Error('Failed fetching data')
        }
        setExpenses(responseData.expenses)

    } catch (error) {
      setError({
        title: 'An error occured!',
        message: 'Failed fetching expenses data, please try again later.'
      })
      setShowError(true)
      }
      setIsFetching(false)
    }
    getExpenses()
    console.log(expenses)
      
  }, [])


  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }
  
  const onAddExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        const response = await fetch('http://localhost:3005/add-expense', {
          method: 'POST',
          body: JSON.stringify(expense),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const responseData = await response.json()
        if(!response.ok) {
          throw new Error('Failed saving data')
        }
        setExpenses([expense, ...expenses])
      } catch (error) {
        setError({
          title:'an error occured!',
          message:'failed saving expenses data, please try again'
        })
        setShowError(true)
      }
    }
    addExpense(expense)
    
      
  }

  console.log(expenses)

  // expensesData => (expenses)
  //(sulgudes) expenses => (DUMMY_EXPENSES)
  return (
    <div className='App'>
      { showError && (
        <Error 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />)   
      }
      
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching}></Expenses> 
  
    </div>
  );

  

} 

export default App;
