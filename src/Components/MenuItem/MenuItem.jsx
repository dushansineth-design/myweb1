import React from 'react'

const MenuItem = (props) => {
  return (
    <>
        <a href={props.linkurl}>{props.linktext}</a>
    </>
  )
}

export default MenuItem