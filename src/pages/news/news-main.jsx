import { CommonBanner } from "../../shared/banner";
import NewsBanner from "../../assets/img/banners/news-bg.png";
import { Newsletter } from "../../shared/newsletter";
import newsData from "../../data/news-items.json";
import { NewsItemCard } from "../../shared/news-item-card";

export const NewsPage = () => {
    return (
        <main className="news_page">
            <CommonBanner imgSrc={NewsBanner} altText={'NewsBanner'}/>
            <div className="news_page__news-container">
                <div className="news_page__news-list">
                    {newsData.map((item, index) => (
                        <NewsItemCard
                            key={item.id || index}
                            item={item}
                            className="news_page__news-item-card"
                            page="news"
                        />
                    ))}
                </div>
            </div>
            <Newsletter className="news_page__newsletter" />
        </main>
    )
}
