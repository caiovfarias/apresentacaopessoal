// Experience.js
import React, { useState } from 'react';
import { Button, AddOrRemoveButton } from './styles/common-components/Button/Button';
import { MainContainer } from './styles/common-components/MainContainer/MainContainer';
import { Input, FileInput } from './styles/common-components/Input/Input';
import { TextArea } from './styles/common-components/TextArea/TextArea'
import { InfoContainer } from './styles/common-components/InfoContainer/InfoContainer';
import { Footer } from './styles/common-components/Footer/Footer';

const Experience = () => {
  const [experiences, setExperiences] = useState([
    { company: '', position: '', startDate: '', endDate: '', responsibilities: '' },
  ]);

  const handleAddExperience = () => {
    const newExperiences = [...experiences, { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }];
    setExperiences(newExperiences);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const handleSave = () => {
    alert('As alterações foram salvas.');
  };

  return (
    <div>
      <h2>Experiência</h2>
      <MainContainer>
        {experiences.map((experience, index) => (
          <InfoContainer key={index}>
            <div>
              <Input
                placeholder='Nome da Empresa'
                type="text"
                name="company"
                value={experience.company}
                onChange={(event) => handleExperienceChange(index, event)}
              />
            </div>
            <div>
              <Input
                placeholder='Cargo'
                type="text"
                name="position"
                value={experience.position}
                onChange={(event) => handleExperienceChange(index, event)}
              />
            </div>
            <div>

              <Input
                id='startDate'
                type="text"
                placeholder="Data de Início (MM/DD/YYYY)"
                onFocus={() => document.getElementById("startDate").setAttribute("type", "date")}
                onBlur={() => document.getElementById("startDate").setAttribute("type", "text")}
                name="startDate"
                value={experience.startDate}
                onChange={(event) => handleExperienceChange(index, event)}
              />
            </div>
            <div>
              <Input
                id='endDate'
                type="text"
                placeholder="Data de Conclusão (MM/DD/YYYY)"
                onFocus={() => document.getElementById("endDate").setAttribute("type", "date")}
                onBlur={() => document.getElementById("endDate").setAttribute("type", "text")}
                name="endDate"
                value={experience.endDate}
                onChange={(event) => handleExperienceChange(index, event)}
              />
            </div>
            <div>
              <TextArea
                placeholder='Descrição das Responsabilidades'
                name="responsibilities"
                value={experience.responsibilities}
                onChange={(event) => handleExperienceChange(index, event)}
              />
            </div>
            <div>
              <FileInput>
                <label className="file-input-label">
                  <span>Upload Projeto Notável</span>
                  <input type="file" className="attachment-input" />
                </label>
              </FileInput>
            </div>
            <AddOrRemoveButton variant="remove" onClick={() => handleRemoveExperience(index)}>Remover</AddOrRemoveButton>
          </InfoContainer>
        ))}
      </MainContainer>
      <Footer>
      <AddOrRemoveButton onClick={handleAddExperience}>Adicionar Experiência</AddOrRemoveButton>
       <Button onClick={handleSave}>Salvar</Button>
      </Footer>
    </div>

  );
};

export default Experience;
