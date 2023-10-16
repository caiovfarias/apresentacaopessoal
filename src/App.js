import React, { useState } from 'react';
import PersonalInfo from './Personal';
import Education from './Education';
import Experience from './Experience';
import Hobbies from './Hobbies';
import { Header, Links } from './styles/common-components/Header/Header';
import { MobileScreen } from './styles/common-components/MobileScreen/MobileScreen';
import { Screen } from './styles/common-components/Screen/Screen';

const App = () => {
  const [activeTab, setActiveTab] = useState('Sobre Você');

  return (
    <Screen>
      <MobileScreen>
        <Header >
          <h1>Apresentação Pessoal</h1>
          <Links>
            <a onClick={() => setActiveTab('Sobre Você')}>Sobre Você</a>
            <a onClick={() => setActiveTab('Formação')}>Formação</a>
            <a onClick={() => setActiveTab('Experiência')}>Experiência</a>
            <a onClick={() => setActiveTab('Hobbies')}>Hobbies</a>
          </Links>
        </Header>

        {activeTab === 'Sobre Você' && <PersonalInfo />}
        {activeTab === 'Formação' && <Education />}
        {activeTab === 'Experiência' && <Experience />}
        {activeTab === 'Hobbies' && <Hobbies />}
      </MobileScreen>
    </Screen>
  );
};

export default App;