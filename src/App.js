import './App.scss';

import About from './About'
import Projects from './Projects'
import Navbar from './Navbar'
import Contact from './Contact'

import data from './data.json'

function App() {

  return (
    <div className="App">
      <div className='sections'>
        <About info={data.About} />
        <Navbar />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
