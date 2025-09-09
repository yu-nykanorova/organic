import Slider from "react-slick";
import reviews from "../../data/reviews.json";
import { StarIcon } from "../../shared/icons/starIcon";

export const TestimonialLanding = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000
  };

  return (
    <section className="testimonial">
      <p className="testimonial__pretitle">Testimonial</p>
      <h2 className="testimonial__title">What Our Customers Are Saying?</h2>

      <div className="testimonial__slider-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="testimonial__review">
              <div className="reviewer">
                <img src={review.photo.src} alt={review.photo.alt} className="reviewer__img" />
                <div className="reviewer__rating">
                  <StarIcon className="reviewer__rating-staricon" />
                  <StarIcon className="reviewer__rating-staricon" />
                  <StarIcon className="reviewer__rating-staricon" />
                  <StarIcon className="reviewer__rating-staricon" />
                  <StarIcon className="reviewer__rating-staricon" />
                </div>
                <p className="reviewer__desc">{review.desc}</p>
                <h3 className="reviewer__name">{review.name}</h3>
                <p className="reviewer__occupation">{review.occupation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="testimonial__separator"></div>
      <div className="testimonial__group">
        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">100%</h2>
                <p className="testimonial__rating-desc">Organic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">285</h2>
                <p className="testimonial__rating-desc">Active Product</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">350+</h2>
                <p className="testimonial__rating-desc">Organic Orchads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">25+</h2>
                <p className="testimonial__rating-desc">Years of Farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
