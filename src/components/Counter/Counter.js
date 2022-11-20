import React from "react";
import s from "./Counter.css"

class Counter extends React.Component {

    inkrement = (el) => {
        console.log("увеличить");
        console.log(el);
    }
    denkrement = () => {
        console.log("уменьшить");
    }




    render() {
        return (
            < div className={s.counter} >
                < span className={s.value} > 0</span >
                <div className={s.controls}>
                    <button onClick={this.inkrement} >+ 1</button>
                    <button onClick={this.denkrement} >- 1</button>
                </div>
            </div >
        )
    }
};

export default Counter;