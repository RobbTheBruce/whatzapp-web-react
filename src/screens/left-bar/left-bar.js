import styled from 'styled-components';

import FirstBar from './first-bar/first-bar';
import SecondBar from './second-bar/second-bar';
import Friends from './friends/friends';

const LBar = styled.div`
    max-width: 420px;
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
`;

export const LeftBar = () => {
    return (
        <LBar>
            <FirstBar></FirstBar>
            <SecondBar></SecondBar>
            <Friends></Friends>
        </LBar>
    )
};

export default LeftBar;