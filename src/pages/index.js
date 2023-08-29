import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {

    const [counter, setCounter] = useState(0)

    const theme = {
        blue: {
            default: '#0096FF',
            hover: '#002366'
        }
    }

    const Button = styled.button`
        background-color: ${(props) => theme[props.theme].default};
        color: white;
        border: none;
        margin-left: 10px;
        display: flex;
        border-radius: 2pt;
        &:hover {
            background-color: ${(props) => theme[props.theme].hover}
        }
    `;

    Button.defaultProps = {
        theme: "blue"
    }

    function clickMe() {
        setCounter(counter => counter + 10)
    }

    function clickMe2() {
        setCounter(counter => counter * 2)
    }

    function clickMe3() {
        setCounter(counter => counter - 10)
    }

    return (
        <div>{counter} <h1><Button onClick={clickMe}>+10</Button></h1><h1><Button onClick={clickMe2}>x2</Button></h1><h1><Button onClick={clickMe3}>-10</Button></h1></div>
    );
};

export default Home;