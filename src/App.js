//App.js
import React, { Component } from 'react';
//Import Popover
import Popover, { ArrowContainer } from 'react-tiny-popover';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isPopoverOpen: false
    }
  }

  popOverStatus = () => {
    this.setState({ isPopoverOpen:!this.state.isPopoverOpen})
  }

  render() {
    return (
      <div className="App">
        <div style={{width: 100, border: '1px solid #e74c3c', margin: '250px auto'}}>
          <Popover
              isOpen={this.state.isPopoverOpen} //boolean สำหรับแสดงผลถ้าเป็น true จะแสดง popover ถ้าเป็น false จะซ่อน popover
              position={'bottom'} //ตำแหน่งของ popover ที่จะแสดง top, left ,right, bottom
              content={({ position, targetRect, popoverRect }) => (
                <ArrowContainer
                    position={position}
                    targetRect={targetRect}
                    popoverRect={popoverRect}
                    arrowColor={'#1abc9c'}
                    arrowSize={10}
                >
                    <div 
                        style={{ padding: '15px', background: '#1abc9c' }}
                        onClick={this.popOverStatus}
                    >
                        Hi! I'm popover content. Here's my position: {position}.
                    </div>
                </ArrowContainer>
              )} //content ที่จะแสดงในตัว popover 
              > 
              <div 
              style={{textAlign: 'center'}}
              onClick={this.popOverStatus} // ปุ่มสำหรับตั้งค่าสถานะว่าจะให้แสดงหรือซ่อน
              >
              Click me!
              </div>
          </Popover>
        </div>
      </div>
    );
  }
}
export default App;