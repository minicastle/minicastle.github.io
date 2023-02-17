import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import styled from '@emotion/styled';
import LoadPage from './Pages/LoadPage';
import ProjectPage from './Pages/ProjectPage';
import ErrorPage from './Pages/ErrorPage';
import StatPage from './Pages/StatPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Navbar from './Components/Bars/Navbar';
import Footer from './Components/Bars/Footer';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #2b2b2b;
    background-image: url(./images/backDefault.png);
    position: relative;
`;

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <>
                            <LoadPage/>
                        </>
                    }/>
                    <Route path='/home' element={
                        <>
                            <Navbar pageData='home'/>
                            <Homepage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/projects' element={
                        <>
                            <Navbar pageData='projects'/>
                            <ProjectPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/about' element={
                        <>
                            <Navbar pageData='about'/>
                            <AboutPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/contact' element={
                        <>
                            <Navbar pageData='contact'/>
                            <ContactPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/stats' element={
                        <>
                            <Navbar pageData={'stats'}/>
                            <StatPage/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='*'element={
                        <>
                            <ErrorPage/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default App