import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const images = this.props.images;
    return (
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onToggleModal={this.props.onToggleModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
