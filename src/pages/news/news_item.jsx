import { useParams } from "react-router-dom";
import { SingleItemPageBanner } from "../../shared/banner-single-item-page";
import { Newsletter } from "../../shared/newsletter";
import newsData from "../../data/news-items.json";
import { PersonIcon } from "../../shared/icons/personIcon";

export const NewsItem = () => {
    const { id } = useParams();
    const newsItem = newsData.find((item) => item.id === id);

  return (
    <div className="news-item_page">
        <SingleItemPageBanner className="news-item_page__banner" imgSrc={ newsItem.imageSrc }>
            <div className="news-item_page__banner-info">
                <div className="news-item_page__banner-posted-info">
                    <div className="news-item_page__banner-date">Posted On: <span>{ newsItem.date.monthFull } { newsItem.date.day }, { newsItem.date.year }</span></div>
                    <div className="news-item_page__banner-author">
                        <PersonIcon className="news-item_page__banner-author-icon" />
                        <p className="news-item_page__banner-author-name">{ newsItem.author }</p>
                    </div>
                </div>
                <h3 className="news-item_page__banner-title">{ newsItem.title }</h3>
                <p className="news-item_page__banner-desc">{ newsItem.description }</p>
            </div>
        </SingleItemPageBanner>
        <div className="news-item_page__content">
            <p className="news-item_page__content-intro">
                Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.
            </p>
            <div className="news-item_page__content-title">Preferred Form of Vitamin D?</div>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <p className="news-item_page__content-list-paragraph">&bull; Publishing packages and web pageLorem Ipsum as their default</p>
            <p className="news-item_page__content-list-paragraph">&bull; Content here, content here', making it look like readable</p>
            <p className="news-item_page__content-list-paragraph">&bull; Packages and web pageLorem Ipsum as their default</p>
            <div className="news-item_page__content-quote">
                “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
            </div>
            <div className="news-item_page__content-subheading">
                Make perfect organic product with us
            </div>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <p className="news-item_page__content-list-paragraph">1. Publishing packages and web pageLorem Ipsum as their default</p>
            <p className="news-item_page__content-list-paragraph">2. Content here, content here', making it look like readable</p>
            <p className="news-item_page__content-list-paragraph">3. Packages and web pageLorem Ipsum as their default</p>
            <p className="news-item_page__content-list-paragraph">4. more-or-less normal distribution of letters</p>
        </div>
        <Newsletter className="news-item_page__newsletter" />
    </div>    
  )
}
