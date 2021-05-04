import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import LeftBarExtra from '../../../components/LeftBarExtra';
import { LeftBarContext } from '../leftBarProvider';

export const Profile = () => {

    const { leftBarContent, setLeftBarContent } = useContext(LeftBarContext);

    useEffect(() => {

    });

    return (
        <LeftBarExtra show={leftBarContent.open && leftBarContent.controller == 'profile'} hide={() => setLeftBarContent({ ...leftBarContent, open: false })} title='Perfil'>
            conteúdo
        </LeftBarExtra>
    );
};

export default Profile;