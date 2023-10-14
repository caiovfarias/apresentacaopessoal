// Education.js
import React, { useState } from 'react';

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
      {educations.map((education, index) => (
        <div key={index}>
          <div>
            <label>Nome da Instituição:</label>
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>
          <div>
            <label>Nome do Curso:</label>
            <input
              type="text"
              name="course"
              value={education.course}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>
          <div>
            <label>Data de Início:</label>
            <input
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>
          <div>
            <label>Data de Conclusão:</label>
            <input
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={(event) => handleEducationChange(index, event)}
            />
          </div>

          <div>
        <label>Upload Certificado ou Qualificação: </label>
        <input type="file" />
      </div>
          <button onClick={() => handleRemoveEducation(index)}>Remover</button>
        </div>
      ))}
      <button onClick={handleAddEducation}>Adicionar Formação</button>
      <div>
        <button onClick={handleSave}>Salvar</button>
      </div>
    </div>
  );
};

export default Education;
