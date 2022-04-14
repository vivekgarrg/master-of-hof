import React,{useState} from 'react'

function UseState() {
 const [age,setAge] = useState(24)

 let handelClick =()=>{
     setAge(age+1);
 }
    return (
    <>
        <p>Today I am {age} Years of Age</p>
        <button onClick={handelClick}>Get Older!</button>
    </>   
  )
}

export default UseState