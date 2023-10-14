// Experience.js
import React, { useState } from 'react';

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
      {experiences.map((experience, index) => (
        <div key={index}>
          <div>
            <label>Nome da Empresa:</label>
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(event) => handleExperienceChange(index, event)}
            />
          </div>
          <div>
            <label>Cargo:</label>
            <input
              type="text"
              name="position"
              value={experience.position}
              onChange={(event) => handleExperienceChange(index, event)}
            />
          </div>
          <div>
            <label>Data de Início:</label>
            <input
              type="date"
              name="startDate"
              value={experience.startDate}
              onChange={(event) => handleExperienceChange(index, event)}
            />
          </div>
          <div>
            <label>Data de Conclusão:</label>
            <input
              type="date"
              name="endDate"
              value={experience.endDate}
              onChange={(event) => handleExperienceChange(index, event)}
            />
          </div>
          <div>
            <label>Descrição das Responsabilidades:</label>
            <textarea
              name="responsibilities"
              value={experience.responsibilities}
              onChange={(event) => handleExperienceChange(index, event)}
            />
          </div>
          <div>
        <label>Upload Projeto Notável: </label>
        <input type="file" />
      </div>
          <button onClick={() => handleRemoveExperience(index)}>Remover</button>
        </div>
      ))}
      <button onClick={handleAddExperience}>Adicionar Experiência</button>
      <div>
        <button onClick={handleSave}>Salvar</button>
      </div>
    </div>
    
  );
};

export default Experience;
