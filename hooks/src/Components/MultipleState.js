import React,{useState} from 'react'

function MultipleState() {
    const [age,setAge] = useState(24)
    const [siblingNum,setSiblingNum] = useState(12)

    let handelClick =()=>{
        setAge(age+1);
    }
    let handleSibling =()=>{
        setSiblingNum(siblingNum+1)
    }
       return (
       <>
           <p>Today I am {age} Years of Age</p>
           <p>I have {siblingNum} siblings</p>
           <button onClick={handelClick}>Get Older!</button>
           <button onClick={handleSibling}>More Siblings!</button>
       </>   
     )
}

export default MultipleState