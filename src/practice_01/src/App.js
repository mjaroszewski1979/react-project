import { useState } from 'react';

import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';

function App() {

  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; 

  if (userInput) {
    
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
  
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }



  return (
    <div>
      <Header></Header>

      <UserInput onCalculate={calculateHandler}></UserInput>

      {!userInput && <p>No calculations.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}></ResultsTable>}




      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
