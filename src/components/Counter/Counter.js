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
        value: this.props.startValue,
        text_1: " Да ладно!",
        text_2: "кажись выполнелось"
    }


    inkrement = (el) => {
        console.log("увеличить");
        const { value, text_2 } = this.state;

        this.setState({
            value: value + 1,
        }, () => { console.log(text_2); })
        // this.setState(object => {
        //     console.log(object);
        //     return {
        //         value: object.value + 1,
        //     }
        // }, () => { console.log("кажись выполнелось"); })

        // setTimeout(() => {
        //     console.log(target, 1000);
        // }, 1000)
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
                    stule={s.value}
                    value={this.state.value}
                    text_1={this.state.text_1}
                />
                <Controls
                    stule={s.controls}
                    onInkrement={this.inkrement}
                    onDenkrement={this.denkrement}
                />
            </div >
        )
    }
};

export default Counter;