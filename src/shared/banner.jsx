import PropTypes from 'prop-types';

export const CommonBanner = ({ imgSrc, altText }) => {
    return (
      <div className="commonbanner">
        <img src={imgSrc} alt={altText || "Banner"} />
      </div>
    )
  }

  CommonBanner.propTypes = {
    imgSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    altText: PropTypes.string
  };
  