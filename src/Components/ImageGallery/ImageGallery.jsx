import s from './ImageGallery.module.css';

import React, { Component } from 'react';
// import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  // state = {
  //   images: [],
  // };

  // componentDidMount() {
  //   // запрос на API
  //   axios
  //     .get(
  //       'https://pixabay.com/api/?q=react&page=1&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12',
  //     )
  //     .then(res => {
  //       console.log(res.data.hits);
  //       this.setState({ images: res.data.hits });
  //     })
  //     .catch(error => console.log(error));
  // }

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
