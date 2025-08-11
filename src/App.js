import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Chat from './components/Chat';
import RequireAuth from './components/RequireAuth';
import LoginRedirect from './pages/LoginRedirect';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/chat" element={<RequireAuth><Chat /></RequireAuth>} />
        <Route path="/login-redirect" element={<LoginRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
