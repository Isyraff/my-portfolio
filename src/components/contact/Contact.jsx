import "./contact.scss"
import {useState} from "react";

export default function Contact() {

  const [message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (

    <div className='contact' id="contact">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="message"></textarea>
            <button type="submit">Sent</button>
          </form>
    </div>
  )
}
