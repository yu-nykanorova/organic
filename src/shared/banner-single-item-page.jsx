import PropTypes from 'prop-types';

export const SingleItemPageBanner = ({ className, imgSrc, altText, children }) => {
    return (
      <div className={`single-item_page_banner ${className}`}>
        <img src={imgSrc} alt={altText || "Banner"} className="single-item_page_banner__image" />
        <div className="single-item_page_banner__content">{ children }</div>
      </div>
    )
}

SingleItemPageBanner.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  altText: PropTypes.string
};
  