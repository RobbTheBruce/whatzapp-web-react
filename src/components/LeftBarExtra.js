import styled from 'styled-components';

export const LeftBarExtra = (props) => {
    return (
        <LeftBarExtraContent show={props.show}>
            <LeftBarExtraGHeader show={props.show}>
                <div>
                    <svg onClick={() => props.hide()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
                    <span>{props.title}</span>
                </div>
            </LeftBarExtraGHeader>
            <LeftBarExtraGBody>
                {props.children}
            </LeftBarExtraGBody>
        </LeftBarExtraContent>
    );
};

const LeftBarExtraContent = styled.div`
    background-color: #ededed;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 600;
    transition: transform 0.2s ease;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-100%)'};
`;

const LeftBarExtraGHeader = styled.div`
    background-color: #00bfa5;
    height: 108px;
    width: 100%;
    color: white;
    padding: 17px 22px;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        transition: transform 0.6s ease;
        transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-100%)'};
    }

    svg {
        margin-right: 30px;
        cursor: pointer;
        transition: opacity 1s ease;
        opacity: ${props => props.show ? 1 : 0};
    }

    span {
        overflow: hidden;
        font-size: 19px;
        line-height: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        margin-bottom: 1px;
        transition: opacity 1s ease;
        opacity: ${props => props.show ? 1 : 0};
    }
`;

const LeftBarExtraGBody = styled.div`
    height: calc(100% - 108px);
    width: 100%;
`;

export default LeftBarExtra;