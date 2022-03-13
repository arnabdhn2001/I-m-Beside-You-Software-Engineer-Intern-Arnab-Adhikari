import React from 'react'
import './Header.css'
export const Header = ({start , status}) => {
  return (
    <header>
<div className="overlay">
<h1>Computer Vision Project</h1>

<button onClick={start}>{
status ? "Shut Down!" : "Click To Start"
}</button>
</div>
</header>
  )
}
