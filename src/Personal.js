// PersonalInfo.js
import React, { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { Button } from './styles/common-components/Button/Button';
import { MainContainer } from './styles/common-components/MainContainer/MainContainer';
import { Input } from './styles/common-components/Input/Input';
import {TextArea} from './styles/common-components/TextArea/TextArea'

const PersonalInfo = () => {
  const [agreed, setAgreed] = useState(false);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [error, setError] = useState('');

  const handleAgreementChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      if (data.erro) {
        setError('CEP não encontrado. Por favor, verifique o CEP digitado.');
        setEndereco('');
        setBairro('');
      } else {
        setError('');
        setEndereco(`${data.logradouro}, ${data.localidade} - ${data.uf}`);
        setBairro(data.bairro);
      }
    } catch (error) {
      console.error('Houve um erro ao buscar o CEP', error);
    }
  };

  const handleSave = () => {
    alert('As alterações foram salvas.');
  };

  return (
    <div>
      <h2>Sobre Você</h2>
      <MainContainer>
      
      <div>
      <label>Upload de Foto</label>
      </div>
      <div>
        <Input type="file" />
      </div>
      <div>
        <Input type="text" placeholder='Nome'/>
      </div>
      <div>
        <Input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="CEP:"
          maxLength="9"
        />
      </div>
      <div>
      <Button onClick={fetchAddress}>Consultar CEP</Button>
      </div>
      <div>
        <Input type="text" value={endereco} placeholder='Endereço' readOnly />
      </div>
      <div>
        <Input type="text" value={bairro} placeholder='Bairro' readOnly />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
             <InputMask mask="(99) 99999-9999" maskChar="_">
          {(inputProps) => <Input type="text" placeholder='Celular' {...inputProps} />}
        </InputMask>
      </div>
      <div>
        <Input type="email" placeholder="E-mail" />
      </div>
      <div>
        <TextArea placeholder='Mini Bio - Escreva um pouco a respeito de você.' />
      </div>
      <br />
      <label>
        <input type="checkbox" checked={agreed} onChange={handleAgreementChange} />
        Ao informar meus dados, eu concordo com os Termos de Uso
      </label>
      </MainContainer>
      <div>        
        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
