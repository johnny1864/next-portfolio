"use client"
import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form w-full md:w-1/2 px-2">
        <form className='w-full flex flex-col' action="">
            
            <label className=' block mb-2 w-full' htmlFor="full-name">Your Name</label>
            <input type="text" name="full-name" className='mb-4 p-2'  />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" className='mb-4 p-2' />

            <label htmlFor="message">Your Message</label>
            <textarea name="message" className='mb-4 p-2' ></textarea>

            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default ContactForm