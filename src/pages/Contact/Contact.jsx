import React from 'react'
import { useState } from 'react'
import './Contact.css'
import DOMPurify from 'dompurify'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const initialState = {
    fullname: "",
    email: "",
    message: ""
  }

  const [formData, setFormData] = useState(initialState);
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const {fullname, email, message} = formData;
    const purifiedData = {
      fullname: DOMPurify.sanitize(fullname),
      email: DOMPurify.sanitize(email),
      message: DOMPurify.sanitize(message)
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID

    console.log(serviceID, templateID, userID);

    emailjs.send(serviceID, templateID, purifiedData, userID).then((response) => {
      console.log("Email sent successfully", response.text)
      setFormData(initialState)
      setErrors({})
      setIsSent(true)

      toast.success("Sent!",
        {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        }
      )

    }).catch((error) => {
      console.error("Email not sent due to some error", error);
      setIsSent(false)
    }).finally(() => {
      setIsLoading(false);
    })
  };
  const validateForm = () => {
    const {fullname, email, message} = formData;
    const errors = {}

    if (!fullname.trim()) {
      errors.fullname = "Name is required"
    }

    if (!message.trim()) {
      errors.message = "Message is required"
    } 
    
    if(!email.trim()){
      errors.email = "Email is required"
    }else if(!isValidEmail(email)){
      errors.email = "Invalid email"
    }
    return errors
  }

  const isValidEmail = (value) => {
    const emailregexTemplate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailregexTemplate.test(value)
  }

  return (
    <main className="contact">
      <h1>Contact</h1>
      <hr/>
      <section className="contact_map">
        <figure className="contact_map_embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.8460334488!2d-87.73196395!3d41.83373295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1703536061631!5m2!1sen!2sus" 
            title= "google map embed" width="400" height="300"loading="lazy"></iframe>
        </figure>
      </section>
      <section className="contact_form">
        <h3 className="contact_form_title">Contact Form</h3>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="contact_form_input">
            <input type="text" name='fullname' placeholder='Full Name' value={formData.fullname} onChange={handleChange} className="contact_form_input_fullname" required />
            <input type="email" name='email' placeholder='Email address' value={formData.email} onChange={handleChange} className="contact_form_input_email" required/>
          </div>
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="contact_form_input_message" required></textarea>
          <button className="contact_form_btn">
            Send
            <SendIcon className='contact_form_btn_send'/>
            </button>
        </form>
      </section>
      
    </main>
  )
}

export default Contact