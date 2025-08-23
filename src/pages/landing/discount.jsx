import DiscountImageBlock1 from '../../assets/img/discount/discount-image1.png';
import DiscountImageBlock2 from '../../assets/img/discount/discount-image2.png';

export const DiscountLanding = () => {
    return (
      <div className='discount'>
          <div className="discount__image-block">
            <img src={DiscountImageBlock1} alt="DiscountImageBlock1" />
          </div>
          <div className="discount__image-block">
            <img src={DiscountImageBlock2} alt="DiscountImageBlock2" />
          </div>
      </div>
    );
  }