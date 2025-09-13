import Spicy from "../../assets/img/about/spicy.png";
import Nuts from "../../assets/img/about/nuts.png";
import Granat from "../../assets/img/about/granat.png";
import Ginger from "../../assets/img/about/ginger.png";

export const OfferAboutUs = () => {
  return (
    <div className="offer-about">

      <div className="offer-about__info">
        <div className="offer-about__info-title">About Us</div>
        <h2 className="offer-about__info-description">What We Offer for You</h2>
      </div>

      <div className="offer-about__cards">

        <a href="/" className="offer-about__cards-item">
          <div className="offer-about__cards-item-img"> <img src={Spicy} alt="yellow spicy peper" /> </div>
          <div className="offer-about__cards-item-title">Spicy</div>
        </a>

        <a href="/" className="offer-about__cards-item">
          <div className="offer-about__cards-item-img"><img src={Nuts} alt="nuts" /></div>
          <div className="offer-about__cards-item-title">Nuts & Feesd</div>
        </a>

        <a href="/" className="offer-about__cards-item">
          <div className="offer-about__cards-item-img"><img src={Granat} alt="red granat" /></div>
          <div className="offer-about__cards-item-title">Fruits</div>
        </a>

        <a href="/" className="offer-about__cards-item">
          <div className="offer-about__cards-item-img"><img src={Ginger} alt="ginger" /></div>
          <div className="offer-about__cards-item-title">Vegetable</div>
        </a>

      </div>
    </div>
  )
}
