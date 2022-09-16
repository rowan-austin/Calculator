import React from "react";

const isOperator = val => {
    return !isNaN(val);
};

const Button = (props) => {
    const {val} = props;

    return (
        <button id={val} className={`button ${isOperator(props.children) ? null : "operator"}`} onClick={() => props.handleClick(props.children)}>{props.children}</button>
    );

};

export default Button;