import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, tags, onToggleModal }) => {
  return (
    <li className={s.ImageGalleryItem} key={id} onClick={onToggleModal}>
      <img
        src={webformatURL}
        alt={`${tags}`}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
