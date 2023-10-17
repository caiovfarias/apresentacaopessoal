// Education.js
import React, { useState } from 'react';
import { MainContainer, MainContainer2 } from './styles/common-components/MainContainer/MainContainer';
import { Input, FileInput } from './styles/common-components/Input/Input';
import { Button, AddOrRemoveButton } from './styles/common-components/Button/Button';
import { Footer } from './styles/common-components/Footer/Footer';
import { InfoContainer } from './styles/common-components/InfoContainer/InfoContainer';

const Education = () => {
  const [educations, setEducations] = useState([{ institution: '', course: '', startDate: '', endDate: '' }]);

  const handleAddEducation = () => {
    const newEducations = [...educations, { institution: '', course: '', startDate: '', endDate: '' }];
    setEducations(newEducations);
  };

  const handleRemoveEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
  };

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const newEducations = [...educations];
    newEducations[index][name] = value;
    setEducations(newEducations);
  };

  const handleSave = () => {
    alert('As alterações foram salvas.');
  };

  return (
    <div>
      <h2>Formação</h2>
      <MainContainer>
        {educations.map((education, index) => (
          <InfoContainer key={index}>
            <div>
              <Input
                placeholder='Nome da Intituição'
                type="text"
                name="institution"
                value={education.institution}
                onChange={(event) => handleEducationChange(index, event)}
              />
            </div>
            <div>
              <Input
                placeholder='Nome do Curso'
                type="text"
                name="course"
                value={education.course}
                onChange={(event) => handleEducationChange(index, event)}
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
                value={education.startDate}
                onChange={(event) => handleEducationChange(index, event)}
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
                value={education.endDate}
                onChange={(event) => handleEducationChange(index, event)}
              />
            </div>

            <div>
              <FileInput>
                <label className="file-input-label">
                  <span>Upload de Certificado</span>
                  <input type="file" className="attachment-input" />
                </label>
              </FileInput>
            </div>
            <AddOrRemoveButton variant="remove" onClick={() => handleRemoveEducation(index)}>Remover</AddOrRemoveButton>
          </InfoContainer>
        ))}
      </MainContainer>

      <Footer>
        <AddOrRemoveButton onClick={handleAddEducation}>Adicionar Formação</AddOrRemoveButton>
        <Button onClick={handleSave}>Salvar</Button>
      </Footer>

    </div>
  );
};

export default Education;
