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
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectPageCloneCoding from './Pages/ProjectPageCloneCoding';
import ProjectPageOriginalProject from './Pages/ProjectPageOriginalProject';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    background-color: #2b2b2b;
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
                    <Route path='/projects/clone-codings' element={
                        <>
                            <Navbar pageData='projects'/>
                            <ProjectPageCloneCoding/>
                            <Footer/>
                        </>
                    }/>
                    <Route path='/projects/original-projects' element={
                        <>
                                <Navbar pageData='projects'/>
                            <ProjectPageOriginalProject/>
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