import { useState } from 'react'

const Rating = (props) => {
    const [rating, setRating] = useState(props.value || 1)
  
    const set = (idx) => {
        props.onChange && props.onChange(idx)
        setRating(idx)
    }
  
    let l = [0,1,2,3,4]
    return <div style={{display: 'flex', width:'100%', textAlign: 'center', justifyContent:'content'}}>
  
    {l.map((x, idx) => 
      <div 
      style={{
        color: idx < rating ? 'orange' : 'black', 
        cursor: 'pointer', 
        fontSize: '2rem' 
      }} onClick={() => set(idx + 1)}
      >
        ★
      </div>
    )}
    </div>
    
  }

  export default Rating