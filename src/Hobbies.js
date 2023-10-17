// Hobbies.js
import React, { useState } from 'react';
import { Button, AddOrRemoveButton } from './styles/common-components/Button/Button';
import { MainContainer } from './styles/common-components/MainContainer/MainContainer';
import { Input, FileInput } from './styles/common-components/Input/Input';
import { TextArea } from './styles/common-components/TextArea/TextArea'
import { InfoContainer } from './styles/common-components/InfoContainer/InfoContainer';
import { Footer } from './styles/common-components/Footer/Footer';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([{ hobby: '', description: '' }]);

  const handleAddHobby = () => {
    const newHobbies = [...hobbies, { hobby: '', description: '' }];
    setHobbies(newHobbies);
  };

  const handleRemoveHobby = (index) => {
    const newHobbies = [...hobbies];
    newHobbies.splice(index, 1);
    setHobbies(newHobbies);
  };

  const handleHobbyChange = (index, event) => {
    const { name, value } = event.target;
    const newHobbies = [...hobbies];
    newHobbies[index][name] = value;
    setHobbies(newHobbies);
  };

  const handleSave = () => {
    alert('As alterações foram salvas.');
  };

  return (
    <div>
      <h2>Hobbies</h2>
      <MainContainer>
        {hobbies.map((hobby, index) => (
          <InfoContainer key={index}>
            <div>
              <Input
                placeholder='Hobby/Interesse'
                type="text"
                name="hobby"
                value={hobby.hobby}
                onChange={(event) => handleHobbyChange(index, event)}
              />
            </div>
            <div>
              <TextArea
                placeholder='Descrição'
                name="description"
                value={hobby.description}
                onChange={(event) => handleHobbyChange(index, event)}
              />
            </div>
            <div>
              <FileInput>
                <label className="file-input-label">
                  <span>Upload de Foto</span>
                  <input type="file" className="attachment-input" />
                </label>
              </FileInput>
            </div>
            <AddOrRemoveButton variant="remove" onClick={() => handleRemoveHobby(index)}>Remover</AddOrRemoveButton>
          </InfoContainer>
        ))}
      </MainContainer>
      <Footer>
        <AddOrRemoveButton onClick={handleAddHobby}>Adicionar Hobbie</AddOrRemoveButton>
        <Button onClick={handleSave}>Salvar</Button>

      </Footer>
    </div>
  );
};

export default Hobbies;
