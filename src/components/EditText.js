import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const EditText = (props) => {
    const [edit, setEdit] = useState(false);
    const [rows, setRows] = useState(1);
    const [limit, setLimit] = useState(140);

    useEffect(() => {
        setRows(String(Math.ceil(String(props.text.length) / 39) > 0 ? Math.ceil(String(props.text.length) / 39) : 1));

        if (props.limit)
            setLimit(parseInt(props.limit));
    });

    return (
        <EditTextContent edit={edit} limit={props.text.length} {...props}>
            <div className='title'>{props.name}</div>

            <div className="edit-prev">
                {!edit ?
                    <span>{props.text}</span>
                    :
                    <textarea wrap='hard' maxLength={limit} rows={rows} value={props.text} onChange={(t) => props.setText(t.target.value)} ></textarea>
                }

                <div className="edit-options-prev">
                    <svg onClick={e => setEdit(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path></svg>
                </div>
                <div className="edit-options">
                    {(props.text.length > 100 || props.limit) ?
                        <div className="count">{limit - props.text.length}</div>
                        : <></>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24"><path fill="currentColor" d="M9.5 1.7C4.8 1.7 1 5.5 1 10.2s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 15.9c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4z"></path><path fill="currentColor" d="M6.8 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4 0 .6.5 1 1.1 1.1zM13.9 11.6c-1.4.2-2.9.3-4.4.4-1.5 0-2.9-.1-4.4-.4-.2 0-.4.1-.4.3v.2c.9 1.8 2.7 2.9 4.7 3 2-.1 3.8-1.2 4.8-3 .1-.2 0-.4-.1-.5h-.2zm-4.1 2c-2.3 0-3.5-.8-3.7-1.4 2.3.4 4.6.4 6.9 0 0 .1-.4 1.4-3.2 1.4zM12.2 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4.1.6.5 1 1.1 1.1z"></path></svg>
                    <svg onClick={e => setEdit(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" style={{ "marginBottom": "3px" }}><path fill="currentColor" d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"></path></svg>
                </div>
            </div>

        </EditTextContent>
    );
}

const EditTextContent = styled.div`
    padding: 14px 30px 10px;
    margin-bottom: 10px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);

    .title {
        font-size: 14px;
        line-height: normal;
        color: #009688;
        font-weight: 400;
        margin-bottom: 14px;
    }

    .edit-prev {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #4a4a4a;
        min-height: 20px;
        font-size: 17px;
        line-height: 20px;
        align-items: center;
        border-bottom: ${props => props.edit ? '2px solid #00bfa5' : '2px solid #fff'};
        position: relative;
        
        textarea {
            width: calc(100% - ${props => props.limit < 100 ? '60px' : '70px'});
            border: none;
            outline: none;
            min-height: 20px;
            font-size: 17px;
            line-height: 20px;
            color: #4a4a4a;
            margin: 8px 0;
            padding: 0px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            resize: none;
            overflow: hidden;
        }

        span {
            margin: 8px 0;
            width: 100%;
        }

        svg {
            color: #919191;
            margin-left: 5px;
            cursor: pointer;
        }

        .edit-options-prev {
            display: flex;
            align-items: center;
            transition: all 0.4s ease;
            transform: ${props => props.edit ? 'scaleX(0) scaleY(0)' : 'scaleX(1) scaleY(1)'};
            opacity: ${props => props.edit ? 0 : 1};
            z-index: ${props => props.edit ? 10 : 100};
            position: absolute;
            right: 0px;
        }

        .edit-options {
            transition: all 0.4s ease;
            transform: ${props => props.edit ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)'};
            opacity: ${props => props.edit ? 1 : 0};
            z-index: ${props => props.edit ? 100 : 10};
            position: absolute;
            right: 0px;
            min-height: 20px;
            font-size: 17px;
            line-height: 20px;
            color: #4a4a4a;
            display: flex;
            align-items: center;

            .count {
                font-size: 14px;
                line-height: 22px;
                color: rgb(0 0 0 / 25%);
                margin-left: 5px;
                margin-right: 3px;
                text-align: right;
            }
        }

    }
`;

export default EditText;