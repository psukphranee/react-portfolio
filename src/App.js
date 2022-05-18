import './App.scss';

import Intro from './Intro'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'
import Works from './Works'
import Menu from './Menu'

import data from './data.json'

import { useState } from 'react';

function App() {

  const [activeState, activeCallback] = useState(false);

  return (
    <div className="App">
      <Navbar activeState={activeState} activeCallback={activeCallback} />
      <Menu activeState={activeState} activeCallback={activeCallback}/>
      <div className='sections'>
        <Intro info={data.About} /> 
        <Projects />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
