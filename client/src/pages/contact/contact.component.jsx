import React, {useState} from 'react';
import FormInput from './../../components/form-input/form-input.component';


import {ContactContainer, ContactTitle, ContactButton} from './contact.styles';

const ContactPage = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone] = useState('');


    const handleSubmit = async event => {
        event.preventDefault();
    };

    const handleChange = event => {
        //const { name,value} = event.target;
        setName(event.target.value);
        setEmail(event.target.value);
        setPhone(event.target.value);

    };
   
    return (
        <ContactContainer>
            <ContactTitle> Quick Contact </ContactTitle>
            <span> Contact us today, and get reply with in 24 hours! </span>\
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
                <ContactButton type="submit"> CONTACT US </ContactButton>
            </form>
        </ContactContainer>
     
    )
}

export default ContactPage;
