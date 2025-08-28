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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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
          path="/subject-selection"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/career-selection"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/eng-branch-selection"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/career-cluster-selection"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/couseling-one"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/vocational-training"
          element={
            <Layout>
              <AssessmentTests />
            </Layout>
          }
        />
        <Route
          path="/ai-career"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/ai-job"
          element={
            <Layout>
              <Services />
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
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogPost />
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
