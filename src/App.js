import './App.scss';

import Intro from './Intro'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'
import Works from './Works'

import data from './data.json'

import { useState } from 'react';

function App() {

  const [activeState, activeCallback] = useState(false);

  return (
    <div className="App">
      <div className='sections'>
        <Intro info={data.About} />
        <Navbar activeState={activeState} activeCallback={activeCallback} />
        <Projects />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
