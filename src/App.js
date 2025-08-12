import React, { useEffect } from 'react';
import api from './services/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AssessmentTests from './pages/AssessmentTests';
import SeminarsWorkshops from './pages/SeminarsWorkshops';
import UpcomingEvents from './pages/UpcomingEvents';
import Resources from './pages/Resources';
import SuccessStories from './pages/SuccessStories';
import Chat from './components/Chat';
import RequireAuth from './components/RequireAuth';
import LoginRedirect from './pages/LoginRedirect';

const App = () => {
  useEffect(() => {
    // Warm up the backend to reduce cold-start/CORS edge cases
    api.getApiStatus();
  }, []);
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
        <Route
          path="/assessment-tests"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/seminars-workshops"
          element={
            <Layout>
              <SeminarsWorkshops />
            </Layout>
          }
        />
        <Route
          path="/upcoming-events"
          element={
            <Layout>
              <UpcomingEvents />
            </Layout>
          }
        />
        <Route
          path="/resources"
          element={
            <Layout>
              <Resources />
            </Layout>
          }
        />
        <Route
          path="/success-stories"
          element={
            <Layout>
              <SuccessStories />
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
