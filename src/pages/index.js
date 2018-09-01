import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className = "container">
    <h1>Hi, I’m Ghanashyam. Nice to meet you.</h1>
    <p>I am a 20 year old Indian guy living in Jaipur, Studying Computer Science and helping Small communities to embrace technology upfront, I am highly adaptable and driven by learning. If there is a problem, I seek ways to fix it. Whether it takes reading a book or picking up a lesson in a framework I don’t know, I’ve grown to embrace the challenges that development can bring.</p>
    <button> <Link to="/page-2/">Go to page 2</Link> </button>
    
  </div>
)

export default IndexPage
