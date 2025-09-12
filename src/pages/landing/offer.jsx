import { ProductCard } from '../../shared/product-card';
import productData from '../../data/products-items.json';
import { ArrowIcon } from '../../shared/icons/arrowIcon';


export const OfferLanding = () => {
  const productList = productData.slice(12, 17);
  return (
    <section className="offer-landing">

      <div className="offer-landing__info">

        <div className="offer-landing__text">
          <p className="offer-landing__text-title">Offer</p>
          <h2 className="offer-landing__text-desc">We Offer Organic For You</h2>
        </div>

        <div className="offer-landing__button">
          <a href="/" className="offer-landing__button-btn">View All Product <span className='offer-landing__button-arrow'><ArrowIcon /></span></a>
        </div>

      </div>

      <div className="offer-landing__cards">

        {productList.map((item, index) => (
          <ProductCard key={item.id || index} item={item} className="offer-landing__cards-item"/>
        ))}

      </div>
    </section>
  );
}