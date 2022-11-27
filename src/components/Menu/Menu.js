import React from "react";
import s from "./Menu.module.css";

import Content from "./Content";

class Menu extends React.Component {
    state = {
        visible: true,
        text_true: "Показать цифры",
        text_false: "Скрыть цифры",
    }

    numberContent = 44;

    hide = () => {
        this.setState(el => ({
            visible: !el.visible,
        }))
    };

    render() {
        const { visible, text_true, text_false } = this.state

        return (
            <div className={visible ? s.counter : s.content_close}>
                <div className={s.text} onClick={this.hide}>{visible ? text_true : text_false}</div>
                {/* {visible && <Content
                    visible={visible}
                    stule={s.content}
                    numberContent={this.numberContent}
                />} */}
                <Content
                    numberContent={this.numberContent}
                    visible={visible}
                    content_red={s.content_red}
                    content_blue={s.content_blue}
                />


            </div>
        )
    }
}

export default Menu;