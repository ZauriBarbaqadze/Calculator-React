function App() {
  const createNumbers = () => {
    const numbers = [];

    for(let i = 1; i < 10; i++) {
      numbers.push(
        <button key={i}>{i}</button>
      )
    }

    return numbers;
  }

  return (
    <div className="App">
      <div className="Calc">
        <div className="screen">
          <span>(0)</span>0
        </div>
        <div className="ops">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <button>წაშლა</button>
        </div>

        <div className="numbers">
          { createNumbers() }
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
