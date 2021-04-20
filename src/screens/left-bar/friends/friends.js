import styled from 'styled-components';

const FriendsContent = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    scrollbar-color: rgba(0,0,0,.2) hsla(0,0%,100%,.1);
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 5px;
    }
    
    &::-webkit-scrollbar-track {
        background: white; 
    }
    
    &::-webkit-scrollbar-thumb {
        background: #cccccc; 
    }
`;

const FriendsScroll = styled.div`
    width: 100%;
    min-height: 100%;
    margin-top: -1px;
`;

const FriendMoreOptions = styled.div`
    margin-left: 5px;
    width: 0px;
    overflow: hidden;
    transition: width 0.15s ease;
`;

const Friend = styled.div`
    width: 100%;
    height: 72px;
    cursor: pointer;
    display: flex;
    flex-direction: row;

    &:hover {
        background-color: #f5f5f5;
    }

    &:hover ${FriendMoreOptions} {
        width: 19px;
    }
`;

const FriendImage = styled.div`
    padding: 0 15px 0 13px;
    display: flex;
    flex: none;
    align-items: center;
`;

const FriendContent = styled.div`
    padding-right: 15px;
    border-top: 1px solid #f2f2f2;
    width: calc(100% - 78px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child{
        border-top: none;
    }
`;

const FriendNameTime = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: space-between;
`;

const FriendName = styled.div`
    font-size: 17px;
    font-weight: 400;
`;

const FriendTime = styled.div`
    overflow: hidden;
    line-height: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: none;
    max-width: 100%;
    font-size: 12px;
    line-height: 20px;
    color: rgba(0,0,0,0.45);
    padding-top: 3px;
`;

const FiendLastMessageOptions = styled.div`
    display: flex;
    flex-direction: row;
`;

const FriendCheckedMessage = styled.div`
    color: #4fc3f7;
    margin-right: 2px;
`;

const FriendMessage = styled.div`
    flex-grow: 1;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(0,0,0,0.6);
`;

const FriendOptions = styled.div`
    margin-left: 6px;
    color: rgba(0,0,0,0.3);
    display: flex;
    flex-direction: row;
`;


export const Friends = () => {
    return (
        <FriendsContent>
            <FriendsScroll>
                <Friend>
                    <FriendImage>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="49" height="49"><path fill="#DFE5E7" class="background" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" class="primary" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg>
                    </FriendImage>
                    <FriendContent>
                        <FriendNameTime>
                            <FriendName>Roberto Oliveira Martins</FriendName>
                            <FriendTime>17:44</FriendTime>
                        </FriendNameTime>
                        <FiendLastMessageOptions>
                            <FriendCheckedMessage>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                            </FriendCheckedMessage>
                            <FriendMessage>
                                eh a vida, você da o pé e a pessoa quer o corpo inteiro
                            </FriendMessage>
                            <FriendOptions>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" width="16" height="18"><path fill="currentColor" d="M11.52 9.206c0-1.4-.778-2.567-1.944-3.111v1.711L11.52 9.75v-.544zm1.945 0c0 .7-.156 1.4-.389 2.022l1.167 1.167c.544-.933.778-2.1.778-3.267 0-3.344-2.333-6.144-5.444-6.844v1.633c2.255.778 3.888 2.8 3.888 5.289zm-11.433-7L1.02 3.217l3.656 3.656H1.02v4.667h3.111l3.889 3.889v-5.211l3.344 3.344c-.544.389-1.089.7-1.789.933v1.633a6.64 6.64 0 0 0 2.878-1.4l1.556 1.556 1.011-1.011-7-7-5.988-6.067zm5.988.778L6.387 4.617 8.02 6.25V2.984z"></path></svg>

                                <FriendMoreOptions>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"><path fill="currentColor" d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path></svg>
                                </FriendMoreOptions>
                            </FriendOptions>
                        </FiendLastMessageOptions>
                    </FriendContent>
                </Friend>
            </FriendsScroll>
        </FriendsContent>
    );
};

export default Friends;