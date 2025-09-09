import DiscountImageBlock1 from '../../assets/img/discount/discount-image1.png';
import DiscountImageBlock2 from '../../assets/img/discount/discount-image2.png';

export const DiscountLanding = () => {
    return (
      <div className='discount'>
          <div className="discount__item">
            <img className="discount__item-image" src={DiscountImageBlock1} alt="DiscountImageBlock1" />
            <div className="discount__item-info">
              <div className="discount__item-info-comment">Natural!!</div>
              <div className="discount__item-info-desc">Get Garden Fresh Fruits</div>
            </div>
          </div>
          <div className="discount__item">
            <img className="discount__item-image" src={DiscountImageBlock2} alt="DiscountImageBlock2" />
            <div className="discount__item-info">
              <div className="discount__item-info-comment">Offer!!</div>
              <div className="discount__item-info-desc">Get 10% off
on Vegetables</div>
            </div>
          </div>
      </div>
    );
  }