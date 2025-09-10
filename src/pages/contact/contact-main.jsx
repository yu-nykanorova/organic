import { FarmsContactUs } from "./farms";
import { FormContactUs } from "./form";
import { ContactsContactUs } from "./contacts";
import { CommonBanner } from "../../shared/banner";
import ContactBanner from "../../assets/img/banners/contact-bg.jpg";
import { Newsletter } from "../../shared/newsletter";

export const ContactUsPage = () => {
  return (
    <div className="contactus_page">
        <CommonBanner imgSrc={ContactBanner} altText={'ContactBanner'}/>
        <ContactsContactUs/>
        <FarmsContactUs/>
        <FormContactUs/>
        <Newsletter />
    </div>
  )
}
