import React from'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App=() => {
  const expenses = [
    {
      id:'e1',
      title:'Toilet Paper',
     amount :94.12,
    date: new Date(2019, 7 ,27),
    locationOfExpenditure: 'Store A',
  },
    { id: 'e2', title:'New TV',amount:298.45,date: new Date(2023,7,26),locationOfExpenditure: 'Store C',},
    {
      id:'e3',
      title:'car insurance',
     amount :95.12,
    date: new Date(2020, 7 ,27),
    locationOfExpenditure: 'Store B',
  },
  
    
    {
      id:'e4',
      title:'car engine',
     amount :97.12,
    date: new Date(2022, 7 ,27),
    locationOfExpenditure: 'Store D',
  },
    
  ];
  
    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2',{},"Let's get started!"),
    //   React.createElement(Expenses,{items:expenses},)
    //   );
    /* {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
    ))} */
    // <div>
    // <h2>Let's get started! </h2>
    // <Expenses items={expenses}/>
    
    // </div>
    return (
      <div>
        <NewExpense/>
        <Expenses items={expenses}/>
      </div>
    );
  
}

export default App;
