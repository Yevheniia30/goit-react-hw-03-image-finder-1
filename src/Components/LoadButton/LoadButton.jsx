import s from './LoadButton.module.css';

const LoadButton = ({ onFetchImages }) => {
  return (
    <button className={s.load_btn} onClick={onFetchImages}>
      Load more
    </button>
  );
};

export default LoadButton;
