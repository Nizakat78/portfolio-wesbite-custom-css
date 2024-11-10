import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import '../app/styles/contact.css'

const Contact = () => {
  return (
    <div id ="Contact" className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="fade-down-left"> Get in Touch</h2>
                <p className='contact-text' data-aos="fade-down-left">
                    Drop me a line, Give me a call, or send  me a message by submitting  the form.
                </p>
                <div className='contact-flex' data-aos="fade-down-right">
                <TfiEmail size={40}/> nizakatalilaghari7@gamil.com
                </div>
                <div className='contact-flex' data-aos="fade-down-right">
                <FaPhoneVolume size={40}/> (+92) 30-33267284
                </div>
                <div className='contact-space'>
                    <div className='form' data-aos="fade-down-right">
                        <label htmlFor="name">Name</label>
                        <input type= "text"
                        className='h-[40px] bg-transparent border border-accent'
                        id='name'/>
                    </div>
                    <div className='flex flex-col gap-1' data-aos="fade-down-right">
                        <label htmlFor="email">Email</label>
                        <input type= "text"
                        className='input-field'
                        id='email'/>
                    </div>
                    <div className='form' data-aos="fade-down-right">
                        <label htmlFor="msg">Message</label>
                        <textarea 
                        className='textarea-field'
                        id='msg' rows={8}>
                            </textarea>
                    </div>
                    <button className='button' data-aos="flip-right"> Send</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
