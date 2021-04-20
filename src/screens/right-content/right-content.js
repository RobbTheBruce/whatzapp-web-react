import styled, { keyframes } from 'styled-components';
import Intro from './intro/intro';

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
    }
`;

const CFirstBar = styled.div`
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

const CContent = styled.div`
    border-left: 1px solid rgba(0,0,0,0.08);
    height: calc(100% - 121px);
   
`;

const CLastBar = styled.div`
    border-left: 1px solid rgba(0,0,0,0.08);
    padding: 0;
    background-color: #f0f0f0;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    flex: none;
    order: 3;
    width: 100%;
    min-height: 62px;
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