// Education.js
import React, { useState } from 'react';
import { MainContainer, MainContainer2 } from './styles/common-components/MainContainer/MainContainer';
import { Input } from './styles/common-components/Input/Input';
import {TextArea} from './styles/common-components/TextArea/TextArea'

import { Button, AddOrRemoveButton } from './styles/common-components/Button/Button';
import { Footer } from './styles/common-components/Footer/Footer';

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
        <MainContainer2 key={index}>
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
              placeholder='Data de início'
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>
          <div>
            <Input
              placeholder='Data de Conclusão'
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>

          <div>
        <label>Upload Certificado ou Qualificação: </label>
        <Input type="file" />
      </div>
          <AddOrRemoveButton variant="remove" onClick={() => handleRemoveEducation(index)}>Remover</AddOrRemoveButton>
        </MainContainer2>
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
