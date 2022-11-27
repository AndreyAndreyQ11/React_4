import React from "react";


const Content = ({ numberContent, visible, content_blue, content_red }) => {
    const massiv = [];
    for (let i = 0; i < numberContent + 1; i++) {
        massiv.push(i)
    };

    const style = visible ? content_blue : content_red;

    return (
        <>
            {massiv.map(el =>
                <div key={el} className={style} >{el}</div>
            )
            }

            {/* {() => {
                for (let i = 0; i < numberContent + 1; i++) {
                    < div key={i} className={stule} > {i}</div>
                };
            }} */}

        </>
    )
}

export default Content;
