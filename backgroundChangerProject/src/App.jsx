import { useState } from 'react'
import './App.css'

function App() {
  const [backColor, setBackColor] = useState("blue");
  const [isElementHidden, setIsElementHidden] = useState(true);

  return (
    <>
      <div className='main'
      style={{backgroundColor:backColor}}>
      <h1>backColorCaner</h1>
          

          <div>
              <button onClick={() => setIsElementHidden(!isElementHidden)}>+</button>
              {isElementHidden ? null : <div className='BtnGroup'>
              <button 
              onClick={()=> setBackColor('red')}
              style={{backgroundColor:'red'}}
              >Red</button>
              <button
              onClick={()=> setBackColor('black')}
              style={{backgroundColor:'black'}}>Black</button>
              <button
              onClick={()=> setBackColor('green')}
              style={{backgroundColor:'green'}}>Green</button>
              <button
              onClick={()=> setBackColor('yellow')}
              style={{backgroundColor:'yellow'}}>Yellow</button>
              <button
              onClick={()=> setBackColor('pink')}
              style={{backgroundColor:'pink'}}>Pink</button>
              <button
              onClick={()=> setBackColor('white')}
              style={{backgroundColor:'white',
              color:'black'}}>White</button>
              <button
              onClick={()=> setBackColor('purple')}
              style={{backgroundColor:'purple'}}>Purpule</button>
            </div>}
          </div>
      </div>
     
    </>
  )
}

export default App
