import styled, { keyframes } from 'styled-components';
import Intro from './intro/intro';
import CFirstBar from './chat/CFirstBar';
import CContent from './chat/CContent';
import CLastBar from './chat/CLastBar';

const RBar = styled.div`
    width: 100%;
    background-color: #e5ddd5;
    position: relative;

    &:after {
        content: "";
        background-image: url(/images/bg-chat-tile-light.png);
        opacity: 0.06;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
`;

export const RightContent = () => {
    return (
        <>
            {/*<Intro></Intro>*/}
            <RBar>
                <CFirstBar></CFirstBar>
                <CContent></CContent>
                <CLastBar></CLastBar>
            </RBar>
        </>
    );
};

export default RightContent;