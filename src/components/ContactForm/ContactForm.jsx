import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 30px;
  background-image: url('https://cdn.pixabay.com/photo/2014/08/24/19/01/apps-426559_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
const StyledName = styled.span`
color: white;
font-weight: bold;
`;

const StyledNumber = styled.span`
color: white;
font-weight: bold;
`;

const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  
`;

const InputName = styled.input`
    margin-top: 5px;
`;

const AddButton = styled.button`
    margin-top: 8px;
    width: 90px;
    height: 30px;
    background-color: #e8d85dc5;
    border-radius: 5px;
    border-style: none;
    transition: background-color 0.3s ease;

    &:hover, &:focus {
    background-color: #18c944;
    color: white;
    cursor: pointer;
}
`;

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "").slice(0, 8); 
    input = input.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3"); 
    setNumber(input);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelName>
        <StyledName>Name:</StyledName>
        <InputName
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Name"
        />
      </LabelName>
      <LabelName>
        <StyledNumber>Number:</StyledNumber>
        <InputName
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="222-22-22"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </LabelName>
      <AddButton type="submit">Add contact</AddButton>
    </FormContainer>
  );
};

export default ContactForm;