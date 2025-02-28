import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';

function Services() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderContent />
      <div>
        
        <BodyContent>
          <h3>Services Page</h3>
        </BodyContent>

        
        
      </div>
      
    </>
  )
}

export default Services
