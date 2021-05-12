import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import LeftBarExtra from "../../../components/LeftBarExtra";
import { LeftBarContext } from '../leftBarProvider';

export const Settings = () => {
    const { leftBarContent, setLeftBarContent } = useContext(LeftBarContext);
    const [textName, setTextName] = useState("Roberto Martins");
    const [textResume, setTextResume] = useState("Do you feel the sense of achievement?");

    return (
        <LeftBarExtra show={leftBarContent.open && leftBarContent.controller == 'settings'} hide={() => setLeftBarContent({ ...leftBarContent, open: false })} title="Configurações">
            <SettingsContent>
                <ProfileInfo>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="82px" height="82px"><path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
                    <div>
                        <h3>{textName}</h3>
                        <span>{textResume}</span>
                    </div>
                </ProfileInfo>
                <CustomList>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg>
                        <span>Notificações</span>
                    </div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6z" fill="currentColor"></path></svg>
                        <span>Tema</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"></path></svg>
                        <span>Papel de parede da conversa</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg>
                        <span>Bloqueados</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.852 12.648h2.296L12 9zM20 8.691V6c0-1.102-.898-2-2-2h-2.691L13.41 2.102a2 2 0 0 0-2.828 0L8.692 4H6c-1.102 0-2 .898-2 2v2.691L2.102 10.59a2.004 2.004 0 0 0 0 2.832L4 15.32V18c0 1.102.898 2 2 2h2.691l1.899 1.898c.781.782 2.05.782 2.832 0L15.32 20H18c1.102 0 2-.898 2-2v-2.691l1.898-1.899a2.004 2.004 0 0 0 0-2.832zm-5.91 6.707L13.602 14h-3.204l-.488 1.398a.89.89 0 0 1-.84.602.888.888 0 0 1-.84-1.191l2.442-6.86C10.872 7.38 11.398 7 12 7c.602 0 1.129.379 1.34.941l2.441 6.86a.89.89 0 0 1-.84 1.187.868.868 0 0 1-.851-.59zm0 0"></path></svg>
                        <span>Atalhos do teclado</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4.7c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm.8 13.9h-1.6V17h1.6v1.6zm1.7-6.3l-.7.7c-.7.6-1 1.1-1 2.3h-1.6v-.4c0-.9.3-1.7 1-2.3l1-1.1c.3-.2.5-.7.5-1.1 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6H8.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3c0 .8-.4 1.4-.8 1.9z"></path></svg>
                        <span>Ajuda</span>
                    </div>
                </CustomList>
            </SettingsContent>
        </LeftBarExtra>
    );
};

const CustomList = styled.div`
    > div {
        position: relative;
        display: flex;
        flex: none;
        align-items: center;
        height: 60px;
        cursor: pointer;

        svg {
            display: flex;
            flex: none;
            justify-content: center;
            width: 74px;
            color: #919191;
        }

        span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-sizing: border-box;
            display: flex;
            flex: 1 1 auto;
            align-items: center;
            height: 100%;
            overflow: hidden;
            padding-right: 30px;
            font-size: 17px;
            line-height: 21px;
            color: #000;
            border-top: 1px solid #f2f2f2;
        }
    }

    > div:first-child {
        span {
            border-top: 0px;
        }
    }

    > div:hover {
        background-color: #f5f5f5;
    }
`;

const ProfileInfo = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: auto;

    svg {
        margin: 16px 19px;
    }

    > div {
        width: calc(100% - 120px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 24px;
        
        h3 {
            color: #000;
            font-size: 19px;
            line-height: 28px;
            font-weight: 400;
            margin: 0px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }  
        span {
            margin-top: 3px;
            min-height: 20px;
            font-size: 15px;
            line-height: 20px;
            color: rgb(0 0 0 / 60%);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    :hover {
        background-color: #f5f5f5;
    }
`;

const SettingsContent = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
`;

export default Settings;