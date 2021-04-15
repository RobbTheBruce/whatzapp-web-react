import styled from 'styled-components';

const RBar = styled.div`
    width: 100%;
    border-left: 1px solid rgba(0,0,0,0.08);
    background-color: #f8f9fa;
    border-bottom: 6px solid #4adf83;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BoxDiv = styled.div`
    width: 80%;
    max-width: 460px;
    text-align: center;
`;

const ImageConnection = styled.div`
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
    transform-origin: center;
    background-image: url(/images/intro-connection-light.jpg);
    width: 356px;
    height: 355px;
`;

const Text1 = styled.h3`
    color: #525252;
    font-size: 36px;
    font-weight: 300;
    line-height: 37px;
    margin-top: 38px;
    margin-bottom: 0px;
`;

const Text2 = styled.div`
    margin-top: 24px;
    color: rgba(0,0,0,0.45);
    font-size: 14px;
    line-height: 20px;
`;

const Text3 = styled.div`
    margin-top: 34px;
    padding-top: 34px;
    border-top: 1px solid rgba(0,0,0,0.08);
    font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,0.45);
`;

export const RightContent = () => {
    return (
        <RBar>
            <BoxDiv>
                <ImageConnection></ImageConnection>
                <Text1>Mantenha seu celular conectado</Text1>
                <Text2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</Text2>
                <Text3>O WhatsApp está disponível para Windows. Obtenha-o aqui.</Text3>
            </BoxDiv>
        </RBar>
    );
};

export default RightContent;