import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    //   при монтировании вешаем слушатель
    console.log('Modal componentDidMount');
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
    return createPortal(
      <div className={s.Overlay} onClick={this.handleClickOnOverlay}>
        <div className={s.Modal}></div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
