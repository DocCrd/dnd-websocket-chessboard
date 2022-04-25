import React from 'react';
import Websocket from 'react-websocket';
import Board from "../board/Board";
import { moveKnight } from "../util/KnightObserver";

class TestWebsocket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serverPosition: "" + props.position[0] + "," + props.position[1],
      position: props.position,
      recentlyChanged: true,
      connected: false,
    }
  }
  componentDidMount() {
    console.log(this.state.serverPosition);
  }

  componentDidUpdate(props) {
    this.sendMessage()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state == null)
      return true;

    if (this.isEqueal(nextState.position, nextProps.position))
      if (!this.state.recentlyChanged)
        return false;

    return true;
  }

  handleOpen = () => {
    console.log("connected");
    this.setState(Object.assign(this.state, { connected: true }))
  }

  handleClose() {
    console.log("closed");
  }

  isEqueal(position1, position2) {
    if (isNaN(position1[0]) || position1[1] === "NaN" || isNaN(position2[0]) || position2[1] === "NaN")
      return true

    if (position1[0] !== position2[0] || position1[1] !== position2[1]) {
      return false
    } else {
      return true
    }
  }

  handleMoveKnight = (ps) => {
    console.log("step made by other")
    moveKnight(ps[0], ps[1])
  }

  handleData = (data) => {
    let content = JSON.parse(data).content.split(",")
    let newPosition = [Number(content[0]), Number(content[1])]

    this.isEqueal(newPosition, this.props.position)
      ? console.log("step made by us or at our position")
      : this.handleMoveKnight(newPosition)

  }

  sendMessage = () => {
    if (this.state.connected) {
      this.refWebSocket.sendMessage(this.props.position);
    }
  }

  render() {
    return (
      <div>
        <Websocket url='ws://go.chess.mir-crm.com:9002/ws' onMessage={this.handleData}
          onOpen={this.handleOpen} onClose={this.handleClose}
          reconnect={true} debug={true}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }} />

        {this.state.position &&
          <Board knightPosition={this.props.position} />
        }
      </div>
    );
  }
}

export default TestWebsocket;