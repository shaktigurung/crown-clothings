import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from './../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from './../../redux/user/user.actions';

import {SignInContainer, SignInTitle, ButtonsBarContainer, SignInButton, GoogleSignInButton} from './sign-in.styles';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({ email:'', password: ''});
    const {email, password}= userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { name,value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };
   
    return(
        <SignInContainer>
            <SignInTitle> Login </SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required  
                />
                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    handleChange={handleChange} 
                    label='password'
                    required 
                />
                <ButtonsBarContainer>
                    <SignInButton type='submit'> Sign in </SignInButton>
                    <GoogleSignInButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </GoogleSignInButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}


const mapDispatchToPros = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password } ))
})
export default connect(null, mapDispatchToPros)(SignIn);