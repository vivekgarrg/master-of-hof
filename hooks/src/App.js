import UseState from './Components/UseState';
import MultipleState from './Components/MultipleState';
import ObjectState from './Components/ObjectState';
import FunctionState from './Components/FunctionState';
import React,{ useState, useEffect, useContext } from 'react';
import './App.css';

const ThemeContext = React.createContext('light')
function Display(){
  const theme =  useContext(ThemeContext);
  return <div
    style={{
      background: theme=== 'dark'? 'black':'pink',
      color: theme === 'dark'?'brown':'#AA336A',
      width: '100%',
      minHeight: '200px'
    }}>
      {"The theme here is "+theme}
  </div>
}

function App() {
  const [age, setAge] = useState(0)

  useEffect(()=>{
    document.title = `You are ${age} Year old!`
  },[age])
  let handleTitle = ()=>{
    setAge(prevAge=>prevAge+1)
  }
  return (
    <div className="App">
              <UseState/>
              <MultipleState/>
              <ObjectState/>
              <FunctionState/>
      <div>
        <p>Look at the title of the current tab in your browser</p>
        <button onClick={handleTitle}>Update Title!</button>
      </div>
      <Display/>
    </div>
    
  );
}

export default App;
