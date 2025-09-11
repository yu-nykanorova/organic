import { ShopItemCard } from './shop_item_card';
import { ShopItemAdditional } from './shop_item_additional';
import { ShopItemToggle } from './shop_item_toggle';
import { CommonBanner } from "../../shared/banner";
import ShopSingleBanner from "../../assets/img/banners/shop-single-bg.jpg";
import { Newsletter } from '../../shared/newsletter';

export const ShopItem = () => {

    return (
        <div className="shop_single-item_page">
            <CommonBanner imgSrc={ShopSingleBanner} altText={'ShopSingleBanner'}/>
            <ShopItemCard />
            <ShopItemToggle />
            <ShopItemAdditional />
            <Newsletter />
        </div>
    )
}