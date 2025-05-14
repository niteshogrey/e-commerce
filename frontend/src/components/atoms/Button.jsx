import React from 'react'

const Button = ({icon, title, className}) => {
  return (
    <div>
        <button className={` flex text-center justify-center gap-1 ${className}`} ><span>{icon}</span>{title}</button>
    </div>
  )
}

export default Button