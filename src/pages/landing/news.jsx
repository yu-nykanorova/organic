import { ArrowIcon } from "../../shared/icons/arrowIcon";
import { PersonIcon } from "../../shared/icons/personIcon";

export const NewsLanding = () => {
  return (
    <div className="news-lending">
      <p className="news-lending__mark">News</p>
      <div className="news-lending__row">
        <h2 className="news-lending__title">
          Discover weekly content about organic food, & more
        </h2>
        <a href="" className="news-lending__btn">
          <p>More News</p>
          <div className="arrow-box">
            <ArrowIcon className="arrow-icon" />
          </div>
        </a>
      </div>
      <div className="news-lending__items">
        <div className="news-lending__item salad">
          <div className="news-lending__item-img">
            <div className="news-lending__item-date">
              <p>25</p>
              <p>
                <span>nov</span>
              </p>
            </div>
          </div>
          <div className="news-lending__item-info">
            <div className="news-lending__item-info-icon">
              <PersonIcon />
              <p className="news-lending__item-info-name">By Rachi Card</p>
            </div>

            <h4 className="news-lending__item-info-title">
              The Benefits of Vitamin D & How to Get It
            </h4>
            <p className="news-lending__item-info-desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>

            <a href="" className="news-lending__item-info-btn">
              <p>Read More</p>
              <svg
                width="19rem"
                height="19rem"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                <path
                  d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="news-lending__item tomato">
          <div className="news-lending__item-img">
            <div className="news-lending__item-date">
              <p>25</p>
              <p>
                <span>nov</span>
              </p>
            </div>
          </div>
          <div className="news-lending__item-info">
            <div className="news-lending__item-info-icon">
              <PersonIcon />
              <p className="news-lending__item-info-name">By Rachi Card</p>
            </div>

            <h4 className="news-lending__item-info-title">
            Our Favourite Summertime Tommeto
            </h4>
            <p className="news-lending__item-info-desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>

            <a href="" className="news-lending__item-info-btn">
              <p>Read More</p>
              <div className="arrow-box">
                <ArrowIcon className="arrow-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
