import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    //   при монтировании вешаем слушатель
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // снимаем слушаетель при размонтировании
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // закрытие нажатием ESC
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // закрытие нажатием на оверлей
  handleClickOnOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { srcModal, altModal } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleClickOnOverlay}>
        <div className={s.Modal}>
          <img src={srcModal} alt={altModal} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  srcModal: PropTypes.string.isRequired,
  altModal: PropTypes.string.isRequired,
};

export default Modal;
