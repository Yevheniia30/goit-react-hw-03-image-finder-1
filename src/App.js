import { Component } from 'react';
import axios from 'axios';
import s from './App.module.css';
import ImageGallery from './Components/ImageGallery';
import SearchBar from './Components/SearchBar';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    showModal: false,
    images: [],
  };

  componentDidMount() {
    // запрос на API
    axios
      .get(
        'https://pixabay.com/api/?q=react&page=1&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(res => {
        console.log(res.data.hits);
        this.setState({ images: res.data.hits });
      })
      .catch(error => console.log(error));
  }

  // открываемъзакрываем модалку
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const images = this.state.images;
    const { largeImageURL } = this.state.images.map(
      image => image.largeImageURL,
    );
    const { showModal } = this.state;
    return (
      <div className={s.App}>
        <SearchBar />

        <ImageGallery images={images} onToggleModal={this.toggleModal} />
        {/* если шоумодал тру то рендерим модалку */}
        {showModal && (
          <Modal onClose={this.toggleModal} images={images}>
            <img src={largeImageURL} alt="" />
            <button
              type="button"
              className={s.close_btn}
              onClick={this.toggleModal}
            >
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
