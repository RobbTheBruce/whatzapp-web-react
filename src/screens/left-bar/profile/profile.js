import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import EditText from '../../../components/EditText';
import LeftBarExtra from '../../../components/LeftBarExtra';
import { LeftBarContext } from '../leftBarProvider';

export const Profile = () => {

    const { leftBarContent, setLeftBarContent } = useContext(LeftBarContext);
    const [textName, setTextName] = useState("Roberto Martins");
    const [textResume, setTextResume] = useState("Do you feel the sense of achievement?");
    useEffect(() => {

    });

    return (
        <LeftBarExtra show={leftBarContent.open && leftBarContent.controller == 'profile'} hide={() => setLeftBarContent({ ...leftBarContent, open: false })} title='Perfil'>
            <ProfilePhoto show={leftBarContent.open && leftBarContent.controller == 'profile'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="100%" height="100%"><path fill="#DFE5E7" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
                <div className="change-photo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z"></path></svg>
                    <span>Mudar foto do perfil</span>
                </div>
            </ProfilePhoto>
            <CustomEditText show={leftBarContent.open && leftBarContent.controller == 'profile'} name='Nome' text={textName} setText={setTextName} limit='25'></CustomEditText>
            <ProfileWarning show={leftBarContent.open && leftBarContent.controller == 'profile'}>Esse não é seu nome de usuário e nem seu PIN. Esse nome será visível para seus contatos do WhatsApp.</ProfileWarning>
            <CustomEditText show={leftBarContent.open && leftBarContent.controller == 'profile'} name='Recado' text={textResume} setText={setTextResume}></CustomEditText>
        </LeftBarExtra>
    );
};

const ProfileWarning = styled.div`
    margin: 4px 20px 28px 30px;
    color: rgba(0,0,0,0.45);
    font-size: 14px;
    line-height: 20px;
    padding-top: 4px;
    transition: all 0.3s ease;
    transition-delay: 0.3s;
    opacity: ${props => props.show ? 1 : 0};
`;

const CustomEditText = styled(EditText)`
    && {
        transition: all 0.3s ease;
        transition-delay: 0.3s;
        opacity: ${props => props.show ? 1 : 0};
    }
`;

const ProfilePhoto = styled.div`
    margin-top: 28px;
    margin-bottom: 28px;
    width: 100%;
    height: ${props => props.show ? '200px' : '0px'};
    display: flex;
    flex: none;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease, opacity 0.2s ease;
    transition-delay: 0.2s;
    transform: scale(${props => props.show ? '1' : '0.1'});
    opacity: ${props => props.show ? 1 : 0};

    svg {
        width: 200px;
        height: 200px;
    }

    .change-photo {
        position: absolute;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: hsl(0deg 0% 40% / 80%);
        color: white;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.2s ease;
        cursor: pointer;

        svg {
            width: 24px;
            height: 24px;
        }

        span {
            font-size: 13px;
            line-height: 15px;
            text-transform: uppercase;
            margin-top: 10px;
            text-align: center;
            width: 100px;
        }

        &:hover {
            opacity: 1;
        }
    }    

`;

export default Profile;