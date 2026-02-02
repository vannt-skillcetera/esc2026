import "./Contact.css";
import contactIcon from "../../assets/contact.png";
import emailIcon from "../../assets/email.png";
import mediaIcon from "../../assets/social-media.png";
import supportIcon from "../../assets/support.png";
import fbIcon from "../../assets/facebook.png";
import insIcon from "../../assets/instagram.png";

function Contact() {
  return (
    <div className="body-content">
      <h1 className="contact-title">CONTACT US</h1>

      {/* The container for the four boxes */}
      <div className="contact-grid">
        {/* Box 1 */}
        <div className="contact-box">
          <div className="icon-placeholder"><img src={contactIcon} alt=""/></div>
          <div className="box-content">
            <h2>Text us at: [number]</h2>
            <p>Message and data rates may apply</p>
            <a href="#">Text Us: →</a>
          </div>
        </div>

        {/* Box 2 */}
        <div className="contact-box">
          <div className="icon-placeholder"><img src={supportIcon} alt=""/></div>
          <div className="box-content">
            <h2>Call us at: 0935588268</h2>
            <p>Available 7am-11pm, 7 days a week</p>
            <a href="#">Call Us: →</a>
          </div>
        </div>

        {/* Box 3 */}
        <div className="contact-box">
          <div className="icon-placeholder"><img src={emailIcon} alt=""/></div>
          <div className="box-content">
            <h2>Email us at: skillcetera@esc.org</h2>
            <p>We'd love to hear from you</p>
            <a href="skillcetera@gmail.com">Email Us:</a>
          </div>    
        </div>

        {/* Box 4 */}
        <div className="contact-box">
          <div className="icon-placeholder"><img src={mediaIcon} alt=""/></div>
          <div className="box-content">
            <h2>Our social media:</h2>
            <div className="social-icons">
              {/* Add your social media icons here */}
              <span><img src={fbIcon} alt=""/></span> <span><img src={insIcon} alt=""/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;