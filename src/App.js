import React from 'react';
import Container from './components/Container.js'
import SUBJECTS from  './data/subjectsList'


function App() {
  return (
    <div>
      <Container data={SUBJECTS} />
    </div>
  );
}

export default App;
