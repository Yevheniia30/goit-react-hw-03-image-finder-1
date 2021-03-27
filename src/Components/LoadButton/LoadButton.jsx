import PropTypes from 'prop-types';
import s from './LoadButton.module.css';

const LoadButton = ({ onFetchImages }) => {
  return (
    <button className={s.load_btn} onClick={onFetchImages}>
      Load more
    </button>
  );
};

LoadButton.propTypes = {
  onFetchImages: PropTypes.func.isRequired,
};

export default LoadButton;
