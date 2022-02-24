import React, { createContext, useState } from "react";

type FriendsType = {
    id: number,
    name: string,
    lastTimeOnline: string,
    lastMessage: string
}[];

type PropsFriendsContext = {
    state: FriendsType,
    setState: React.Dispatch<React.SetStateAction<FriendsType>>
}

const DEFAULT_VALUE = {
    state: [{
        id: 1,
        name: 'Roberto Oliveira Martins',
        lastTimeOnline: '17:44',
        lastMessage: 'eh a vida, você da o pé e a pessoa quer o corpo inteiro'
    }, {
        id: 2,
        name: 'Rodrigo Oliveira Martins',
        lastTimeOnline: '17:44',
        lastMessage: 'batatinha frita 123'
    }, {
        id: 3,
        name: 'Izaias Batista da Silva',
        lastTimeOnline: '10:30',
        lastMessage: 'que anime ruim'
    }],
    setState: (): any => []
};

const FriendsContext = createContext<PropsFriendsContext>(DEFAULT_VALUE);

const FriendsContextProvider: React.FC<{}> = ({ children }: any) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return (
        <FriendsContext.Provider value={{ state, setState }}>
            {children}
        </FriendsContext.Provider>
    );
};

export { FriendsContextProvider };
export default FriendsContext;