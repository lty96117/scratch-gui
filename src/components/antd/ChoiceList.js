import { List, Avatar, Button, Spin } from 'antd';

import React from 'react';
import { connect } from "react-redux";
import motion from '../../../static/test.json';
import event from '../../../static/events.json';
import sounds from '../../../static/sounds.json';

class ChoiceList extends React.Component {


  render() {
    const data = [
      {
        title: 'Motion Test',
        json: motion
      },
      {
        title: 'Event Test',
        json: event
      },
      {
        title: 'Sounds Test',
        json: sounds
      },
    ];

    return (

      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a onClick={() => {
            this.props.loadProject(JSON.stringify(item.json));
            this.props.onOk();
          }}>Select</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
              title={<a>{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )}
      />

    );
  }
}

const mapStateToProps = state => ({
  loadProject: state.vm.fromJSON.bind(state.vm)
});
export default connect(
  mapStateToProps,
  () => ({}) // omit dispatch prop
)(ChoiceList);