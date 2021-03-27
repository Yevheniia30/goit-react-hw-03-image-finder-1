import { Component } from 'react';
import s from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  // изменение значения инпута
  handleSearch = e => {
    this.setState({ query: e.currentTarget.value });
  };

  // сабмит формы
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}></span>
          </button>

          <input
            className={s.SearchForm_input}
            value={query}
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
