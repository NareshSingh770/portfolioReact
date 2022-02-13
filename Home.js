import React, { useState } from 'react';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';
import { ModalOpen } from './context/Context'
import Popup from './modal/Popup';

const Home = (props) => {

    const [modalState, setModal] = useState(false)

    return (
        <>
            <ModalOpen.Provider value={[modalState, setModal]}>
                {modalState ? <Popup /> : ''}
                <Hero />
                <About />
                <Services />
                <Skills />
                <Contact />
            </ModalOpen.Provider>
        </>
    )
}

export default Home
