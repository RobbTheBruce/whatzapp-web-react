import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

export const MenuList = ({ data, open, hide }) => {
    const wrapperRef = useRef(null);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        setOpened(open);

        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    });

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target) && opened) {
            hide(false);
        }
    };

    return (
        <>
            <MenuListContent show={opened} ref={wrapperRef}>
                <ul>
                    {(() => {
                        let tempList = [];

                        data.map((item, i) => {
                            tempList.push(<li key={'menulistitem-' + i} onClick={item.action}>
                                {item.name}
                            </li>);
                        });

                        return tempList;
                    })()}
                </ul>
            </MenuListContent>
        </>
    );
}

const MenuListContent = styled.div`
    transform-origin: right top;
    transition: transform 0.2s ease, opacity 0.2s ease;
    transform: scale(${props => props.show ? 1 : 0});
    opacity: ${props => props.show ? 1 : 0};

    text-align: left;
    padding: 9px 0;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26),0 2px 10px 0 rgba(0,0,0,.16);
    position: absolute;
    z-index: 10000;
    max-width: 340px;
    overflow: visible;
    right: 4px;
    top: 44px;
    
    ul{
        list-style: none;
        margin: 0px;
        padding: 0px;

        li {
            padding-right: 58px;
            padding-left: 24px;
            padding-top: 13px;
            cursor: pointer;
            position: relative;
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-sizing: border-box;
            display: block;
            height: 40px;
            font-size: 14.5px;
            line-height: 14.5px;
            color: #4a4a4a;

            &:hover{
                background-color: #f5f5f5;
            }
        }
    }
`;

export default MenuList;