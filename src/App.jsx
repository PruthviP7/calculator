import './app.css';

function App() {
  return (
      <div className='main-container'>
        <div className='calculator-container'>
          <div className='screen'>
            <input disabled/>
          </div>
          <div id='button-container'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>+</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>-</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>*</div>
            <div>0</div>
          </div>
        </div>
      </div>   
  )
}

export default App
