// Hobbies.js
import React, { useState } from 'react';

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
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <div>
            <label>Hobby/Interesse:</label>
            <input
              type="text"
              name="hobby"
              value={hobby.hobby}
              onChange={(event) => handleHobbyChange(index, event)}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              name="description"
              value={hobby.description}
              onChange={(event) => handleHobbyChange(index, event)}
            />
          </div>
          <div>
        <label>Upload de Foto: </label>
        <input type="file" />
      </div>
          <button onClick={() => handleRemoveHobby(index)}>Remover</button>
        </div>
      ))}
      <button onClick={handleAddHobby}>Adicionar Hobbie</button>
      <div>
        <button onClick={handleSave}>Salvar</button>
      </div>
    </div>
  );
};

export default Hobbies;
