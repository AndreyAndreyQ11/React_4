import React from "react";
import s from "./Counter.module.css";

import Controls from "./Controls";
import Text from "./Text";

class Counter extends React.Component {
    static defaultProps = {
        startValue: 0,
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0,
    //         text: " Да ладно!"
    //     }
    // }
    state = {
        // value: this.props.startValue,
        text_1: " Да ладно!",
        text_2: "кажись выполнелось"
    }

    inkrement = () => {
        this.props.test(this.props.startValue + 1);
        // const { value, text_2 } = this.state;
        // this.setState({
        //     value: value + 1,
        // }, () => { console.log(text_2); })
    };

    denkrement = () => {
        console.log("уменьшить");

        this.setState(prevStat => {
            return {
                value: prevStat.value - 1,
            }
        })
        this.setState(prevStat => ({
            value: prevStat.value - 1,
        }));
    };

    render() {
        return (
            < div className={s.counter} >
                <Text
                    style={s.value}
                    value={this.props.startValue}
                    text_1={this.state.text_1}
                />
                <Controls
                    style={s.controls}
                    onInkrement={this.inkrement}
                    onDenkrement={this.denkrement}
                />
            </div >
        )
    }
};

export default Counter;