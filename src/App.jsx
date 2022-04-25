import React, { useState, useEffect, useRef } from "react";
import { observe } from "./components/util/KnightObserver";
import "./stylesheets/global.css";
import Board from "./components/board/Board";
import TestSocket from "./components/sockets/TestSocket"

// chess board demo
const App = () => {
  // since all that is needed in this simple demo is a stream of values, entire app is wrapped by an observer that subscribes to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model)
  const [changedPosition, setChangedPosition] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() =>
    observe(
      newPosition => { handleNewPosition(newPosition) }
    )
  );

  const handleNewPosition = (position) => {
    setChangedPosition(position)
  }

  return (
    <div>
      {/* <Board knightPosition={changedPosition} /> */}
      <TestSocket position={changedPosition} />
    </div>
  );
}

export default App;
