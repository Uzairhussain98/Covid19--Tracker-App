import React from 'react'
import './About.css'
import image from './GitHub.png'

const About = () => {
  return (
    <div className='abt'>
      <h1 style={{fontSize:'50px'}} >About</h1>
      <h1 style={{fontSize:'40px'}}>Made By Uzair Hussain</h1>  

      <hr /> 
      
      <br/>  <br/>  <br/>   
      <a href="https://github.com/Uzairhussain98"  target="_blank" rel="noopener noreferrer">
        <img src={image} alt='github'/>

      </a>
      <br/>
      <a style={{fontSize:'25px'}} href="https://github.com/Uzairhussain98" 
      target="_blank"  rel="noopener noreferrer">Visit Github Profile </a>
    </div>
  )
}

export default About

