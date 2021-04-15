import styled from 'styled-components';

const LBar = styled.div`
    max-width: 425px;
    width: 100%;
    min-width: 200px;
`;

export const LeftBar = () => {
    return (
        <LBar>
            left bar
        </LBar>
    )
};

export default LeftBar;