import React from 'react'

const Button = ({icon, title, className, onClick}) => {
  return (
    <div>
        <button className={` flex text-center justify-center gap-1 ${className}`} onClick={onClick} ><span>{icon}</span>{title}</button>
    </div>
  )
}

export default Button