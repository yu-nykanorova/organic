import { Link } from "react-router-dom";
import newsData from "../../data/news-items.json";
import { ArrowIcon } from "../../shared/icons/arrowIcon";
import { NewsItemCard } from "../../shared/news-item-card";

export const NewsLanding = () => {
  const newsList = newsData.slice(0, 2);

  return (
    <div className="news-landing">
      <p className="news-landing__mark">News</p>
      <div className="news-landing__row">
        <h2 className="news-landing__title">
          Discover weekly content about organic food, & more
        </h2>
        <Link to="/news" className="news-landing__btn">
          <p>More News</p>
          <div className="arrow-box">
            <ArrowIcon className="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="news-landing__items">
        {newsList.map((item, index) => (
          <NewsItemCard key={ item.id || index } item={ item } />
        ))}
      </div>
    </div>
  );
};
