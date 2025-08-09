import React from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_b18m2kl',     
            'template_v7qcr4g',    
            e.target,
            'WmlYF4YJCU6yWSCGT'      
        )
        .then(() => {
            alert('Message envoyé avec succès ! Merci de m’avoir contacté.');
        }, (error) => {
            alert('Erreur lors de l’envoi : ' + error.text);
        });

        e.target.reset(); 
    }

    return (
        <div id="contact_page">
            <h1 id="title_contact">Contact</h1>

            <p id="text_contact">
                N’hésitez pas à m’envoyer un message, je vous répondrai rapidement.
            </p>

            <form id="formulaire_contact" onSubmit={sendEmail}>
                <div className="form_group">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre email"
                        required
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" id="submit_btn">
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default Contact;
