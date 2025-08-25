import { ShopShop } from "./shop";
import { CommonBanner } from "../../shared/banner";
import ShopBanner from "../../assets/img/banners/shop-bg.jpg";

export const ShopPage = () => {
  
  return (
    <main className="shop_page">
      <CommonBanner imgSrc={ShopBanner} altText={'ShopBanner'}/>
      <ShopShop/>
    </main>
  )
}
