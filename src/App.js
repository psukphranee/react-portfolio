import './App.scss';

import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'

import data from './data.json'

import { useState } from 'react';

function App() {

  const [activeState, activeCallback] = useState(false);

  return (
    <div className="App">
      <div className='sections'>
        <About info={data.About} />
        <Navbar activeState={activeState} activeCallback={activeCallback} />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
