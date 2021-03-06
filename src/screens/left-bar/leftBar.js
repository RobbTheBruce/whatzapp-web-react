import styled from 'styled-components';

import FirstBar from './first-bar/first-bar';
import SecondBar from './second-bar/second-bar';
import Friends from './friends/friends';
import Profile from './profile/profile';
import LeftBarProvider from './leftBarProvider';
import Settings from './settings/settings';
import { FriendsContextProvider } from '../../context/friendsProvider';

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
                <FriendsContextProvider>
                    <SecondBar></SecondBar>
                    <Friends></Friends>
                </FriendsContextProvider>
                <Profile></Profile>
                <Settings></Settings>
            </LeftBarProvider>
        </LBar >
    )
};

export default LeftBar;