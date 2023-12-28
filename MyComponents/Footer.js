import React from 'react'

export const Footer = () => {
    let footerStyle = {
      position : "relative",
      top :"70vh",
      width :"100%",
      border :"1px solid pink",
    }
  return (
    <footer className = "bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
      ISTEcode Assignment
      </p> 
    </footer>
  )
}

export default Footer
