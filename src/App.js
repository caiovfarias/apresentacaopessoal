import React, { useState } from 'react';
import PersonalInfo from './Personal';
import Education from './Education';
import Experience from './Experience';
import Hobbies from './Hobbies';

const App = () => {
  const [activeTab, setActiveTab] = useState('Sobre Você');

  return (
    <div>
      <div className="tab">
        <button onClick={() => setActiveTab('Sobre Você')}>Sobre Você</button>
        <button onClick={() => setActiveTab('Formação')}>Formação</button>
        <button onClick={() => setActiveTab('Experiência')}>Experiência</button>
        <button onClick={() => setActiveTab('Hobbies')}>Hobbies</button>
      </div>
      {activeTab === 'Sobre Você' && <PersonalInfo />}
      {activeTab === 'Formação' && <Education />}
      {activeTab === 'Experiência' && <Experience />}
      {activeTab === 'Hobbies' && <Hobbies />}
    </div>
  );
};

export default App;