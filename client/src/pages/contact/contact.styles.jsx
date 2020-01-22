import styled from 'styled-components';
import CustomButton from './../../components/custom-button/custom-button.component';

export const ContactContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const ContactTitle = styled.h2`
  margin: 10px 0;
`;


export const ContactButton = styled(CustomButton)`
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

