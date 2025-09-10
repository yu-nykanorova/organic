import { WhyUsAboutUs } from "./why_us";
import { AboutUsAboutUs } from "./about_us";
import { OfferAboutUs } from "./offer";
import { TeamAboutUs } from "./team";
import { CommonBanner } from "../../shared/banner";
import AboutUsBanner from "../../assets/img/banners/about-bg.jpg";
import { Newsletter } from "../../shared/newsletter";

export const AboutUsPage = () => {
  return (
    <div className="aboutus_page">
          <CommonBanner imgSrc={AboutUsBanner} altText={'aboutus-banner'}/>
          <AboutUsAboutUs />
          <WhyUsAboutUs />
          <TeamAboutUs />
          <OfferAboutUs />
          <Newsletter className="aboutus_page__newsletter" />
    </div>
  )
}
