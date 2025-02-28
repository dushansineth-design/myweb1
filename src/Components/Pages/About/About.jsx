import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderContent />
      <div>
        
        <BodyContent>
          <h3>About Page</h3>
        </BodyContent>

        
        
      </div>
      
    </>
  )
}

export default About
