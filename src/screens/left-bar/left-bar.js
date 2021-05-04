import styled from 'styled-components';

import FirstBar from './first-bar/first-bar';
import SecondBar from './second-bar/second-bar';
import Friends from './friends/friends';
import Profile from './profile/profile';
import LeftBarProvider from './leftBarProvider';

const LBar = styled.div`
    max-width: 420px;
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

export const LeftBar = () => {
    return (
        <LBar>
            <LeftBarProvider>
                <FirstBar></FirstBar>
                <SecondBar></SecondBar>
                <Friends></Friends>
                <Profile></Profile>
            </LeftBarProvider>
        </LBar>
    )
};

export default LeftBar;