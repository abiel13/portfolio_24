import React from 'react'
import DynamicText from './DynamicText'

const Contact = () => {
  return (
    <div className='min-h-screen relative px-[2rem] mt-[10%] '>
         <div className="">
        <DynamicText
          size="2.4rem"
          textArray={["Let's Talk More"]}
        />
      </div>

      <div className='rounded_gradient' />
    </div>
  )
}

export default Contact
