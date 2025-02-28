import React from 'react'
import './MenuLink.css'

const MenuLink = (props) => {
  return (
    <div>
      <a href={props.url} className='link'>{props.linkname}</a>
    </div>
  )
}

export default MenuLink
