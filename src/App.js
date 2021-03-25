import { Component } from 'react';
import axios from 'axios';
import s from './App.module.css';
import ImageGallery from './Components/ImageGallery';
import SearchBar from './Components/SearchBar';
import Modal from './Components/Modal';
import LoadButton from './Components/LoadButton';

class App extends Component {
  state = {
    showModal: false,
    images: [],
    page: 1,
    searchQuery: '',
  };

  // запрос на API нужно сделать когда state (у насsearchQuery) обновился и не равен предідущему
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    // при сабмите сохраняем значение инпута query в searchQuery
    this.setState({ searchQuery: query });
  };

  //запрс на API вызывается при сабмите и при нажатии loadMore
  fetchImages = query => {
    // запрос на API согласно ключевому слову в строке поиска
    const { page } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=16825213-7fb8f93f8fb61dc742d5122ac&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res => {
        this.setState(prevState => ({
          images: res.data.hits,
          page: prevState.page + 1,
        }));
      });
  };

  // открываемъзакрываем модалку
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const images = this.state.images;
    const { showModal } = this.state;
    return (
      <div className={s.App}>
        <SearchBar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onToggleModal={this.toggleModal} />
        {/* если шоумодал тру то рендерим модалку */}
        {showModal && (
          <Modal onClose={this.toggleModal} images={images}>
            {/* <img src={largeImageURL} alt="" /> */}
            <button
              type="button"
              className={s.close_btn}
              onClick={this.toggleModal}
            >
              Close
            </button>
          </Modal>
        )}
        <LoadButton />
      </div>
    );
  }
}

export default App;
