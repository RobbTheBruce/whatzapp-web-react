import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import LeftBarExtra from "../../../components/LeftBarExtra";
import { LeftBarContext } from '../leftBarProvider';

export const Settings = () => {
    const { leftBarContent, setLeftBarContent } = useContext(LeftBarContext);

    return (
        <LeftBarExtra show={leftBarContent.open && leftBarContent.controller == 'settings'} hide={() => setLeftBarContent({ ...leftBarContent, open: false })} title="Configurações">
            configurações
        </LeftBarExtra>
    );
};

export default Settings;