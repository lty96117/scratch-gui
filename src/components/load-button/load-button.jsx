import PropTypes from 'prop-types';
import React from 'react';

import ButtonComponent from '../button/button.jsx';
import styles from './load-button.css';
import LoadModal from "../../containers/LoadModal";

const LoadButtonComponent = ({
                               inputRef,
                               onChange,
                               onClick,
                               title,
                               openModal,
                               loadModalOpen,
                               onOk, onCancel,
                               ...props
                             }) => (
  <div {...props}>
    <LoadModal visible={loadModalOpen}
               onOk={onOk}
               onCancel={onCancel}

    />
    <ButtonComponent
      onClick={openModal}
    >
      {title}
    </ButtonComponent>

  </div>
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
