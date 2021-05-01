import React, { useState } from 'react';
import styled from 'styled-components';
import MenuList from '../../../components/MenuList';

export const CFirstBar = () => {

    const [configInfoOpened, setConfigInfoOpened] = useState(false);
    const menuConfig = [
        { name: 'Dados do contato', action: () => { console.log('gone.1') } },
        { name: 'Selecionar mensagens', action: () => { console.log('gone.2') } },
        { name: 'Silenciar notificações', action: () => { console.log('gone.3') } },
        { name: 'Limpar mensagens', action: () => { console.log('gone.4') } },
        { name: 'Apagar conversa', action: () => { console.log('gone.5') } }
    ];

    return (
        <CFirstBarContent>
            <UserInfo>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="100%" height="100%"><path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
            </UserInfo>
            <NameInfo>
                <p>Roberto Oliveira Martins</p>
                <p>visto por último hoje às 18:15</p>
            </NameInfo>
            <SearchInfo>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
            </SearchInfo>
            <ConfigInfo onClick={() => setConfigInfoOpened(!configInfoOpened)} title='Mais opções'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                <MenuList data={menuConfig} open={configInfoOpened} hide={setConfigInfoOpened}></MenuList>
            </ConfigInfo>
        </CFirstBarContent>
    );
};


const CFirstBarContent = styled.div`
    padding: 10px 16px;
    background-color: #ededed;
    border-left: 1px solid rgba(0,0,0,0.08);
    border-bottom: 1px solid rgba(0,0,0,0.08);
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 59px;
`;

const UserInfo = styled.div`
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-left: 0;
    margin-right: 15px;
`;

const NameInfo = styled.div`
    cursor: pointer;
    margin-left: 0;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    min-width: 0;

    p {
        margin: 0px;

        &:nth-child(1) {
            font-size: 16px;
            font-weight: 400;
            line-height: 21px;
            color: #000;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &:nth-child(2) {
            font-size: 13px;
            line-height: 20px;
            color: rgba(0,0,0,0.6);
        }
    }
`;

const SearchInfo = styled.div`
    display: flex;
    color: #919191;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    margin-left: 10px;

    &:active {
        background-color: rgba(26,26,26,.1);
    }
`;

const ConfigInfo = styled.div`
    display: flex;
    color: #919191;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    margin-left: 10px;
    position: relative;

    &:active {
        background-color: rgba(26,26,26,.1);
    }
`;

export default CFirstBar;