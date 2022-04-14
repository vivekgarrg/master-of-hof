import React,{useState} from 'react'

function ObjectState() {
    const [state, setState] = useState({age:19, sibling:0})
    
    let handleAge = (val)=>{
       setState({...state,[val]:state[val]+1}) 
    }
    let handleSibling = (val)=>{
        setState({...state,[val]:state[val]+1})
    }
    const {age, sibling} = state
  return (
    <div>
        <p>Today I am {age} Years of Age</p>
        <p> I have {sibling} siblings</p>
        <button onClick={()=>handleAge("age")}>Get Older!</button>
        <button onClick={()=>handleSibling("sibling")}>More Siblings!</button>
    </div>
  )
}

export default ObjectState