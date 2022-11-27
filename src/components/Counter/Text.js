import React from "react";

const Text = ({ value, text_1, style }) => (
    < span className={style} > {value + text_1}</span >
)

export default Text;