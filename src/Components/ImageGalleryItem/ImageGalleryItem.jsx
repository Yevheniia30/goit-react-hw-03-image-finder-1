import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onToggleModal }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={onToggleModal}>
      <img
        src={webformatURL}
        alt={`${tags}`}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
