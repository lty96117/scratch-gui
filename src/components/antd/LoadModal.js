import { Modal } from 'antd';
import React from 'react';
import ChoiceList from "./ChoiceList";
import { connect } from "react-redux";

class LoadModal extends React.Component {

  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onOk={this.props.onOk}
        onCancel={this.props.onCancel}
        width={1000}
      >
        <ChoiceList onOk={this.props.onOk}/>
      </Modal>
    );
  }
}


export default LoadModal;