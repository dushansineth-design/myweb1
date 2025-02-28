import React from 'react'
import './BodyContent.css'

const BodyContent = (props) => {
  return (
    <div>
      {props.children}

      <div className='content'>
        {/*props.children*/}
      </div>
    </div>
    
  )
}

export default BodyContent
