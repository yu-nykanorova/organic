import { Link } from "react-router-dom";
import Arrow from "../../assets/img/about/arrow.svg";
import Photo from "../../assets/img/not-found/Photo.png";

export const PageNotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <div className="notfound__img">
          <img src={Photo} alt="Photo" />
        </div>
        <div className="notfound_item">
          <div className="notfound__slogan">404</div>
          <div className="notfound__title">Page not found</div>
          <div className="notfound__desc">
            The page you are looking for doesn&#39;t exist or has been moved
          </div>
          <Link className="notfound__a" type="submit" to="/">
            Go to Homepage <img src={Arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </section>
  )
}
