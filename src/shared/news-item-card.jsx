import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons/arrowIcon";
import { PersonIcon } from "./icons/personIcon";

export const NewsItemCard = ({ item, className, page = "home" }) => {
  
  return (
    <div className={`news-item-card ${className}`}>
      <img className="news-item-card__img" src={ item.imageSrc } alt="news item picture"/>
      <div className="news-item-card__date">
          <p>{ item.date.day }</p>
          <p>
            <span>{ item.date.month }</span>
          </p>
      </div>
      <div className={`news-item-card__info card-info-${page}`}>
        <div className="news-item-card__info-icon">
          <PersonIcon className={`icon-${page}`} />
          <p className="news-item-card__info-name">{ item.author }</p>
        </div>
        <h4 className="news-item-card__info-title">
          { item.title }
        </h4>
        <p className="news-item-card__info-desc">
          { item.description }
        </p>
        <Link to={`/news/${item.id}`} className={`news-item-card__info-btn btn-${page}`}>
          <p>Read More</p>
          <div className="arrow-box">
            <ArrowIcon className="arrow-icon" />
          </div>
        </Link>
      </div>
    </div>

    
  )
}
