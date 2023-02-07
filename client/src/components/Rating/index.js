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
      key={idx}
      style={{
        color: idx < rating ? 'orange' : 'black', 
        cursor: 'pointer', 
        fontSize: '2rem',
        //! using the presence of 'onChange' function to determine if the user can interact with the rating
        // disables user input when you only provide a 'value' - like its only intended for display
        pointerEvents: props.onChange ? 'all' : 'none'
      }} onClick={() => set(idx + 1)}
      >
        ★
      </div>
    )}
    </div>
    
  }

  export default Rating