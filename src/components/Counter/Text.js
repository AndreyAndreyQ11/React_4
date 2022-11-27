import React from "react";

const Text = ({ value, text_1, stule }) => (
    < span className={stule} > {value + text_1}</span >
)

export default Text;