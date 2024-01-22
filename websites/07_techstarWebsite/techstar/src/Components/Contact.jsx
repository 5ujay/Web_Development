import React from 'react'
import '../styles/contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      
      <main>
        <h1>Contact Us</h1>

        <form action="">

            <div>
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='ABC' />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder='ABC@gmail.com' />
            </div>

            <div>
                <label id='message' htmlFor="">Message</label>
                <input type="email" required placeholder='Tell us about abour query....' />
            </div>

            <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact;
