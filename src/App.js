import React from 'react'
import Feature from './Component/Feature'
import Header from './Component/Header'
import About from './Component/About'
import aboutimg from './images/Frame 19.png'
import aboutimg1 from './images/download.png'
import Presentation from './Component/Presentation'
import Contact from './Component/Contact'


function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimg} title='Come With All Your Needs For Daily Life' button='Get the App' />
      <Presentation/>
      <About image={aboutimg1} title='Come With All Your Needs For Daily Life' button='Get the App' />
      <Contact/>
    </div>
  );
}

export default App;
