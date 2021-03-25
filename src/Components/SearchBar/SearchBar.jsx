import { Component } from 'react';
import s from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  // изменение значения инпута
  handleSearch = e => {
    // console.log(e.target.value);
    this.setState({ query: e.currentTarget.value });
  };

  // сабмит формы
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}></span>
          </button>

          <input
            className={s.SearchForm_input}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
