import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

export default function Backdrop(props) {
  const { onClick, isShowed } = props;

  return ReactDOM.createPortal(
    isShowed && <div onClick={props.onClick} className='backdrop'></div>,
    document.getElementById('backdrop-hook')
  );
}
