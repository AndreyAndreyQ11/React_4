import React from "react";

const Controls = ({ onInkrement, onDenkrement, stule }) => (
    <div className={stule}>
        <button onClick={onInkrement} >+ 1</button>
        <button onClick={onDenkrement} >- 1 - 1</button>
    </div>
);

export default Controls;