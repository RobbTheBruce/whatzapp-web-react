import React, { useEffect } from 'react';

import styled from "styled-components";

import LeftBar from "../left-bar/leftBar";
import RightContent from "../right-content/right-content";

const Background = styled.div`
    background-color: #dddbd1;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
        background-color: #128c7e;
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 127px;
        content: "";
        left: 0;
    }
`;

const Boxdiv = styled.div`
    width: calc(100% - 27.25%);
    height: calc(100% - 4%);
    background-color: white;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 20%);
    display: flex;

    @media screen and (max-width: 1441px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
    }
`;

export const Landing = () => {
    useEffect(() => {
        document.title = 'WhatsApp'
    });
    return (
        <Background>
            <Boxdiv>
                <LeftBar></LeftBar>
                <RightContent></RightContent>
            </Boxdiv>
        </Background>
    )
};

export default Landing;