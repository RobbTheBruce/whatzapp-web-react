import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const CContent = () => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.scrollTop = 9999999;
    });

    return (
        <Board ref={ref}>
            <div className="BoardContent">
                <MineText>
                    <div>
                        <div className="messageText"><span>Olá 1</span></div>
                        <div className="options">
                            <span className="time">17:53</span>
                            <div className="status_sending">
                                <span data-testid="msg-check" aria-label=" Enviada " data-icon="msg-check">
                                    <svg viewBox="0 0 16 15" width="16" height="15">
                                        <path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </MineText>

                <MineText>
                    <div className="first-of-group">
                        <span class="tail-out">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
                        </span>
                        <div className="messageText"><span>Olá 2</span></div>
                        <div className="options">
                            <span className="time">17:53</span>
                            <div className="status_sending">
                                <span data-testid="msg-check" aria-label=" Enviada " data-icon="msg-check">
                                    <svg viewBox="0 0 16 15" width="16" height="15">
                                        <path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </MineText>

                <FriendText>
                    <div className="first-of-group">
                        <span class="tail-in">
                            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                        </span>
                        <div className="messageText"><span>Olá 0</span></div>
                        <div className="options">
                            <span className="time">17:53</span>
                            <div className="status_sending">
                                <span data-testid="msg-check" aria-label=" Enviada " data-icon="msg-check">
                                    <svg viewBox="0 0 16 15" width="16" height="15">
                                        <path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </FriendText>
            </div>
        </Board>
    );
}

const FriendText = styled.div`
    color: #303030;
    padding-right: 9%;
    padding-left: 9%;
    width: 100%;
    margin-bottom: 2px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    &> div {
        background-color: #fff;
        border-radius: 7.5px;
        padding: 6px 7px 8px 9px;
        box-shadow: 0 1px .5px rgba(74,74,74,.13);
        font-size: 14.2px;
        line-height: 19px;
        color: #303030;
        position: relative;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        min-width: 100px;
        position: relative;
        flex: none;

        .messageText {
            margin-right: 74px;
        }

        .options {
            height: 15px;
            font-size: 11px;
            line-height: 15px;
            color: rgb(0 0 0 / 45%);
            white-space: nowrap;
            float: right;
            margin: -10px 0 -5px 4px;
            display: flex;
            
            .status_sending {
                margin-left: 3px;
                display: inline-block;
                color: rgb(0 0 0 / 30%);
            }
        }
    }

    &> div.first-of-group{
        border-top-left-radius: 0px;

        .tail-in {
            position: absolute;
            left: -8px;
            top: -2px;

            svg {
                color: #fff;
            }
        }
    }

    @media screen and (min-width: 1301px) {
        &> div {
            max-width: 65%;
        }
    }
`;

const MineText = styled.div`
    color: #303030;
    padding-right: 9%;
    padding-left: 9%;
    width: 100%;
    margin-bottom: 2px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    &> div {
        background-color: #dcf8c6;
        border-radius: 7.5px;
        padding: 6px 7px 8px 9px;
        box-shadow: 0 1px .5px rgba(74,74,74,.13);
        font-size: 14.2px;
        line-height: 19px;
        color: #303030;
        position: relative;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        min-width: 100px;
        position: relative;
        flex: none;

        .messageText {
            margin-right: 74px;
        }

        .options {
            height: 15px;
            font-size: 11px;
            line-height: 15px;
            color: rgb(0 0 0 / 45%);
            white-space: nowrap;
            float: right;
            margin: -10px 0 -5px 4px;
            display: flex;
            
            .status_sending {
                margin-left: 3px;
                display: inline-block;
                color: rgb(0 0 0 / 30%);
            }
        }
    }

    &> div.first-of-group{
        border-top-right-radius: 0px;

        .tail-out {
            position: absolute;
            right: -8px;
            top: -2px;

            svg {
                color: #dcf8c6;
            }
        }
    }

    @media screen and (min-width: 1301px) {
        &> div {
            max-width: 65%;
        }
    }
`;

const Board = styled.div`
    border-left: 1px solid rgba(0,0,0,0.08);
    height: calc(100% - 121px);
    overflow-y: auto;
    position: relative;
    z-index: 1;
    padding-bottom: 8px;
    scrollbar-color: rgba(0,0,0,.2) hsla(0,0%,100%,.1);
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 5px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0); 
    }
    
    &::-webkit-scrollbar-thumb {
        background: #cccccc; 
    }

    .BoardContent {
        display: flex;
        align-items: flex-end;
        flex-direction: column-reverse;
        min-height: 100%;
    }
`;

export default CContent;