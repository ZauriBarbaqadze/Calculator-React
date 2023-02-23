import { useState } from 'react';

function App() {
  const [calcu, setCalcu] = useState("");
  const [shedegi, setShedegi] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calcu === '0' ||
      ops.includes(value) && ops.includes(calcu.slice(-1)
      ) 
    )
    {
      return;
    }
    setCalcu(calcu + value);

    if(!ops.includes(value)) {
      setShedegi(eval(calcu + value).toString());    
    }
  
  }

  const createNumbers = () => {
    const numbers = [];

    for(let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

    return numbers;
  }

  const finalShedegi = () => {
    setCalcu(eval(calcu).toString());
  }

  const cbutton = () => {
    if(calcu == '') {
      return;
    }
    const value = calcu.slice(0, -1);

    setCalcu(value);
  }
  return (
    <div className="App">
      <div className="Calc">
        <div className="screen">
          {shedegi ? <span>({shedegi})</span> : ''}&nbsp;{ calcu || '0' }
        </div>
        <div className="ops">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={cbutton}>C</button>
        </div>

        <div className="numbers">
          { createNumbers() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={finalShedegi}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
