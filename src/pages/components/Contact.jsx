import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 ms-5 contact-info my-5">
          <h1 className="mb-4 fw-bolder">Left questions? Contacts us now for a free consultation and free trial!</h1>
          <p className="fw-lighter mb-5">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
          <div className="contact-info mt-5">
            <p>Email Address</p>
            <h4>ensome@info.co.us</h4>
            <p>Phone Number</p>
            <h4>+1601-201-5580</h4>
            <p>Address</p>
            <h4>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-4">
            <div className="container shadow contact-form my-5">
              <h2>Contact Us</h2>
              <form className='contact'>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" placeholder="Andrea" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="andrea@gmaol.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="theme">Theme:</label>
                  <input type="text" className="form-control" id="theme" placeholder="Job" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <input className="form-control" id="message" placeholder="Your message"></input>
                </div>
                <button type="submit" className="btn btn-primary send">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
