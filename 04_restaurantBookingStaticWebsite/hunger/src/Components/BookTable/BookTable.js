import React from 'react'
import './BookTable.css'
const BookTable = () => {
    return (
        <div className="booktable" id='bookatable'>
            <div className="table-heading">
                Book a Table
            </div>
            <div className="table-subheading">
                <h2>Book Your Stay With Us</h2>
            </div>

            <div className="booktable-form">
                <div className="booktable-img">
                    <img src="https://shorturl.at/bfzOV" alt="" />
                </div>

                <div className="booktable-details">

                    <input type="text" name="name" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <input type="email" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <input type="text" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <input type="text" name="date" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <input type="text" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <input type="number" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />

                    <div className='booktable-btn' >
                        <button>Book a Table</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTable