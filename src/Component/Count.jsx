import React,{useState} from 'react'

const Count = () => {
    const[count,setCount] = useState(0)

    const increase =()=>{
        setCount(count+1)
    }
  return (
    <>
    <div>I have clicked my button {count} times </div>
    <button onClick={increase}>CLICK ME</button>
    </>
  )
}

export default Count;