import { useState } from 'react'
import "../../../App.css";
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import FooterContent from '../../FooterContent/FooterContent';

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
      <FooterContent />
    </>
    
  )
}

export default About
