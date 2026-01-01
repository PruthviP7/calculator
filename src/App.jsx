import './app.css';

const keyArr = ['AC', '%', '←', '➗', '7', '8', '9', '✕', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];

function App() {
  return (
      <div className='main-container'>
        <div className='calculator-container'>
          <div className='screen'>
            <input disabled/>
          </div>
          <div id='button-container'>
           {keyArr.map((item, index) => {
            return <div key={index}>{item}</div>
           })}
          </div>
        </div>
      </div>   
  )
}

export default App
