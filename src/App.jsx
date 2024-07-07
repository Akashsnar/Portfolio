import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
// impm './components/ui/Lamp' 
import { Spotlight } from './components/ui/Spotlights'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
     <div className='fixed top-0 -z-10 h-full w-full'>
     <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
     </div>

     </div>
     
<div className='container mx-auto px-8'>
  <Spotlight className='-top-40 left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
  <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
  <Spotlight className='top-28 left-80 h-[80vh] w-[60vw]' fill='blue'/>

<Navbar/>
<Hero/>
<About/>
<Technologies/>
<Experience/>
<Projects/>
<Contact/>
</div>
    </div>
  )
}

export default App
