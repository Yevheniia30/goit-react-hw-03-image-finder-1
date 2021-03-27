import { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import s from './App.module.css';
import ImageGallery from './Components/ImageGallery';
import SearchBar from './Components/SearchBar';
import Modal from './Components/Modal';
import LoadButton from './Components/LoadButton';

class App extends Component {
  state = {
    // showModal: false,
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    modalImage: '',
    altModalImage: '',
  };

  // запрос на API нужно сделать когда state (у нас searchQuery) обновился и не равен предідущему
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    // при сабмите сохраняем значение инпута query в searchQuery
    // при сабмите сбрасываем значение page и очищаем результаты предыдущего поиска
    this.setState({ searchQuery: query, page: 1, images: [], error: null });
  };

  //запрс на API согласно ключевому слову в строке поиска вызывается при сабмите и при нажатии loadMore
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const key = '16825213-7fb8f93f8fb61dc742d5122ac';

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          page: prevState.page + 1,
        }));
        // плавный скролл стр когда приходит новые изображения
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // открываем модалку кликом на картику галереи
  handleOnImgClick = e => {
    if (e.target.nodeName === 'IMG') {
      this.setState({
        modalImage: e.target.dataset.modal,
        altModalImage: e.target.alt,
      });
    }
  };

  // закрытие модалки
  toggleModal = () => {
    this.setState({
      modalImage: '',
      altModalImage: '',
    });
  };

  render() {
    const { images, isLoading, modalImage, altModalImage, error } = this.state;

    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.onChangeQuery} />

        {error && <p>Oops! Something went wrong...</p>}

        <ImageGallery images={images} onImgClick={this.handleOnImgClick} />

        {modalImage && (
          <Modal
            onClose={this.toggleModal}
            srcModal={modalImage}
            altModal={altModalImage}
          />
        )}

        {images.length > 0 && !isLoading && (
          <LoadButton onFetchImages={this.fetchImages} />
        )}

        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </div>
    );
  }
}

export default App;
