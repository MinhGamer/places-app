import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const { isShowed, onClick } = props;

  const content = (
    <CSSTransition
      in={isShowed}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit>
      <aside className='side-drawer' onClick={onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('sidedrawer-hook')
  );
};

export default SideDrawer;