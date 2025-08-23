import ContactTitleBlockImage from '../../assets/img/contacts/contact-image1.jpg';
import ContactMessage from '../../assets/img/contacts/contact-message.svg';
import ContactPhone from '../../assets/img/contacts/contact-phone.svg';
import ContactInstagram from '../../assets/img/contacts/contact-inst.svg';
import ContactFacebook from '../../assets/img/contacts/contact-facebook.svg';
import ContactTwitter from '../../assets/img/contacts/contact-twitter.svg';
import ContactPinterest from '../../assets/img/contacts/contact-pinterest.svg';

export const ContactsContactUs = () => {
    return (
      <div className='contact-title-block'>
        <div className="contact-title-block__image">
          <img src={ContactTitleBlockImage} alt="fruits" />
        </div>
        <div className="contact-title-block__info">
          <p className='contact-title-block__info-title'>We&apos;d love to talk about how we can work together.</p>
          <span className='contact-title-block__info-desc'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley.</span>
          <div className="contact-title-block__info-for_contact">
            <div className="contact-title-block__info-for_contact-block">
              <div className="contact-title-block__info-for_contact-block-image">
                <img src={ContactMessage} alt="message" />
              </div>
              <div className="contact-title-block__info-for_contact-block-desc">
                <p>Massege</p>
                <span>support@organic.com</span>
              </div>
            </div>
            <div className="contact-title-block__info-for_contact-block">
              <div className="contact-title-block__info-for_contact-block-image">
                <img src={ContactPhone} alt="phone" />
              </div>
              <div className="contact-title-block__info-for_contact-block-desc">
                <p>Contact Us</p>
                <span>+01 123 456 789</span>
              </div>
            </div>
          </div>
          <div className="contact-title-block__info-socials">
            <a href="#"><img src={ContactInstagram} alt="" /></a>
            <a href="#"><img src={ContactFacebook} alt="" /></a>
            <a href="#"><img src={ContactTwitter} alt="" /></a>
            <a href="#"><img src={ContactPinterest} alt="" /></a>
          </div>
        </div>
      </div>
    )
  }
  