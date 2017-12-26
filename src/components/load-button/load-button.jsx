import PropTypes from 'prop-types';
import React from 'react';

import ButtonComponent from '../button/button.jsx';

import styles from './load-button.css';

const LoadButtonComponent = ({
                               inputRef,
                               onChange,
                               onClick,
                               title,
                               openModal,
                               ...props
                             }) => (
  <span {...props}>

            <ButtonComponent
              onClick={openModal}
            >
                {title}
            </ButtonComponent>
            <input
              className={styles.fileInput}
              ref={inputRef}
              type="file"
              onChange={onChange}
            />
    </span>
);

LoadButtonComponent.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
};
LoadButtonComponent.defaultProps = {
  title: 'Load'
};
export default LoadButtonComponent;
