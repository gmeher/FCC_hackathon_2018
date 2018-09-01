import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div className = 'container'>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <button> <Link to="/">Go back to the homepage</Link> </button>
    
  </div>
)

export default SecondPage
