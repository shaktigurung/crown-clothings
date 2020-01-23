import React, {useState} from 'react';
import FormInput from './../../components/form-input/form-input.component';
import FormTextArea from './../../components/form-text-area/form-text-area.component';


import {ContactContainer, ContactTitle, ContactButton} from './contact.styles';

const ContactPage = () => {
    const [userCredentials, setUserCredentials] = useState({ name:'', email: '', phone: '', message: ''});
    const {name, email, phone, message}= userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(userCredentials);
        alert( " You have successfully send message !!!")
        setUserCredentials({ name:'', email: '', phone: '', message: '' })
    };

    const handleChange = event => {
        const { name,value} = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };
   
    return (
        <ContactContainer>
            <ContactTitle> Quick Contact </ContactTitle>
            <span> Contact us today, and get reply with in 24 hours! </span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='name' 
                    name='name' 
                    value={name} 
                    handleChange={handleChange}
                    label='name'
                    required  
                />
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required  
                />
                <FormInput 
                    type='phone' 
                    name='phone' 
                    value={phone} 
                    handleChange={handleChange}
                    label='phone'
                    required  
                />
                <FormTextArea
                    type="message"
                    name="message"
                    value={message}
                    handleChange={handleChange}
                    label='message'
                    required
                />
                <ContactButton type="submit"> CONTACT US </ContactButton>
            </form>
        </ContactContainer>
     
    )
}

export default ContactPage;
