import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
// import {SiViber} from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vp7dxhn', 'template_6tjla8o', form.current, 'wtEi426AwnynBHSrF')

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>alice.p5498@gmail.com</h5>
                        <a href="mailto:alice.p5498@gmail.com">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Nhien Phan Mathers</h5>
                        <a href="https://m.me/loveissweet0504" target='_blank'>Send a message</a>
                    </article>

                    {/* <article className="contact__option">
                        <SiViber/>
                        <h4>Viber</h4>
                        <h5>+1234567890</h5>
                        <a href="viber://chat?number=17785126098">Send a message</a>
                    </article> */}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Name' required />
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name='message' rows='7' placeholder='Your Message' required/>
                        <button className="btn btn-primary">Send Message</button>
                    </form>
            </div>
        </section>
    )
};

export default Contact;