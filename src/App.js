import './App.scss';

import Intro from './Components/Intro'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Works from './Components/Works'
import Menu from './Components/Menu'
import Portfolio from './Components/Portfolio';

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
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
