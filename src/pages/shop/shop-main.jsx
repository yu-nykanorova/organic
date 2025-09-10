import { ShopShop } from "./shop";
import { CommonBanner } from "../../shared/banner";
import ShopBanner from "../../assets/img/banners/shop-bg.jpg";
import { Newsletter } from "../../shared/newsletter";

export const ShopPage = () => {
  
  return (
    <main className="shop_page">
      <CommonBanner imgSrc={ShopBanner} altText={'ShopBanner'}/>
      <ShopShop/>
      <Newsletter className="shop_page__newsletter" />
    </main>
  )
}
