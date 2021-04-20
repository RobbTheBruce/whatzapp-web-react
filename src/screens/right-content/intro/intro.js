import styled, { keyframes } from 'styled-components';

const RBar = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8f9fa;
    border-bottom: 6px solid #4adf83;
    border-left: 1px solid rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const showAnimation = keyframes`
0% { transform: scale(0); opacity: 0; }
100% { transform: scale(1); opacity: 1; }
`;

const BoxDiv = styled.div`
width: 80%;
max-width: 460px;
text-align: center;
transform: scale(1); 
opacity: 1;
animation-name: ${showAnimation};
animation-duration: 1s;
animation-iteration-count: 1;
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

@media screen and (max-height: 740px) {
    width: 250px;
    height: 250px;
}
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
display: flex;
justify-content: center;
align-items: center;
`;

const Text3Info = styled.span`
margin-left: 5px;
`;

const Text3Link = styled.div`
margin-left: 5px;
color: #07bc4c;
`;

export const Intro = () => {
    return (
        <RBar>
            <BoxDiv>
                <ImageConnection></ImageConnection>
                <Text1>Mantenha seu celular conectado</Text1>
                <Text2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</Text2>
                <Text3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18" width="21" height="18"><path fill="currentColor" d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"></path></svg>
                    <Text3Info>O WhatsApp está disponível para Windows.</Text3Info>
                    <Text3Link><a href="https://www.whatsapp.com/download" target="_blank">Obtenha-o aqui.</a></Text3Link>
                </Text3>
            </BoxDiv>
        </RBar>
    );
};

export default Intro;