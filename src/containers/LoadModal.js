import { Modal, Button } from 'antd';
import React from 'react';
import 'antd/lib/modal/style';
class LoadModal extends React.Component {
  // state = { visible: false }
  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // }
  // handleOk = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }
  // handleCancel = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }

  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onOk={this.props.onOk}
        onCancel={this.props.onCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default LoadModal;