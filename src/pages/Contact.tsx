import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with the public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (publicKey) {
      emailjs.init(publicKey);
      setIsEmailJSReady(true);
    } else {
      console.error('EmailJS public key not found in environment variables');
      setMessage({ 
        type: 'error', 
        text: 'Email service is not configured properly. Please contact me directly at alvezjennylynrhea@gmail.com' 
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    // Check if EmailJS is ready
    if (!isEmailJSReady) {
      setMessage({ 
        type: 'error', 
        text: 'Email service is not available. Please contact me directly at alvezjennylynrhea@gmail.com' 
      });
      return;
    }

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey
      });
      
      setMessage({ 
        type: 'error', 
        text: 'Email service configuration is incomplete. Please contact me directly at alvezjennylynrhea@gmail.com' 
      });
      return;
    }

    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      if (result.status === 200) {
        setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Failed to send message. Please contact me directly at alvezjennylynrhea@gmail.com or try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p>Get in touch with me</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="card">
            <h2>Let's Connect</h2>
            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <span>alvezjennylynrhea@gmail.com</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <span>Available upon request</span>
              </div>
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <span>Philippines</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="card">
            <h2>Send a Message</h2>
            
            {message.text && (
              <div className={`message ${message.type}`}>
                {message.text}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading || !isEmailJSReady}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading || !isEmailJSReady}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading || !isEmailJSReady}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading || !isEmailJSReady}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading || !isEmailJSReady}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : !isEmailJSReady ? (
                  <>
                    <i className="fas fa-exclamation-triangle"></i>
                    Service Unavailable
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact