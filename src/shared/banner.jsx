import PropTypes from 'prop-types'

export const CommonBanner = ({ imgSrc, altText }) => {
    return (
      <div className="commonbanner">
        <img src={imgSrc} alt={altText} />
      </div>
    )
  }

  CommonBanner.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    altText: PropTypes.string
  };
  