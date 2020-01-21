import styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {

    }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  
`;

export const SignInButton = styled(CustomButton)`
  width: unset;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const GoogleSignInButton = styled(CustomButton)`
  width: unset;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 5px;
  }
`;