import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import defaultImage from '../../defaultImage/default.jpg';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onImgClick,
}) => {
  return (
    <li className={s.ImageGalleryItem} onClick={onImgClick}>
      <img
        src={webformatURL ?? defaultImage}
        alt={tags}
        data-modal={largeImageURL ?? defaultImage}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
