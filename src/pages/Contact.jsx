import avatar from '../images/avatar.jpg';
import avatar_cropped from '../images/avatar_cropped.jpg';
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';

export default function Contact() {
    return (
        <section className="contact-container">
            <h2 className="contact-header">Kontakta mig?</h2>
            <br />
            <div className="portfolio-img">
                <img src={avatar_cropped} alt="portfolio image"/>
            </div>
            <br />
            <p className="cover-letter-info">
                Hej! Mitt namn är Timotheo och jag är en nyexaminerad webbutvecklare med fokus på moderna tekniker som React, Node.js, HTML5, CSS3 och JavaScript. Jag brinner för att bygga responsiva, användarvänliga och effektiva webblösningar och söker nu möjligheter där jag kan omsätta mina kunskaper i riktiga projekt.
            </p>
            <div className="contact-info">
                {/* <p><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/timotheo-hector-08283a22a/" target="_blank" rel="noopener noreferrer">Here</a></p>
                <p><strong>Github:</strong><a href="https://github.com/Tim-H-H" target="_blank" rel="noopener noreferrer">Here</a></p>*/}
                 <p>
                    <a href="mailto:timotheohh@outlook.com" className="email-button">
                        Skicka e-post
                    </a>
                 </p>
                <a href="https://www.linkedin.com/in/timotheo-hector-08283a22a/" className="linkedIn-icon"><img src={linkedIn} alt="" /></a>
                <a href="https://github.com/Tim-H-H" className="github-icon"><img src={github} alt="" /></a>
            </div>
            
        </section>
    )
}

