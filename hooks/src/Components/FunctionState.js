import React,{useState} from 'react'

function FunctionState() {
    const [count, setCount] = useState(0)
  return (

    <div>
        <p>Count value is {count}</p>
        <button
        onClick={()=>setCount(prevCount=>prevCount-1)}
        >
      Minus(-)
        </button>
        <button
        onClick={()=>setCount(prev=>prev+1)}
        >
        Plus(+)
        </button>
    </div>
  )
}

export default FunctionState