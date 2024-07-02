import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='h-[100vh] w-[100%] flex items-center justify-center  flex-col'>
       <center> <h1 className='text-[36px] font-bold '>Page under maintenance</h1>
        <Link className='underline text-[24px]' to="/">Go back to home</Link> </center>
    </div>
  )
}

export default About