import React from 'react'
import './style.css'
function Container({children,className}) {
  return (
    <div className="container">{children}</div>
  )
}

export default Container