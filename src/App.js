import React, { useEffect, useState } from "react"; // ✅ added useState
import api from "./services/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AssessmentTests from "./pages/AssessmentTests";
import SeminarsWorkshops from "./pages/SeminarsWorkshops";
import UpcomingEvents from "./pages/UpcomingEvents";
import Resources from "./pages/Resources";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Chat from "./components/Chat";
import RequireAuth from "./components/RequireAuth";
import LoginRedirect from "./pages/LoginRedirect";
import SchoolStudents from "./components/SchoolStudents";
import CollegeStudents from "./components/CollegeStudents";
import WorkingProfessinal from "./components/WorkingProfessinal";
import SchoolLayout from "./components/SchoolLayout";
import CollegeLayout from "./components/CollegeLayout";
import WorkingLayout from "./components/WorkingLayout";
import Loader from "./components/Loader";
import useScrollToTop from "./hooks/useScrollToTop";
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";


const App = () => {
  const [loading, setLoading] = useState(true); // ✅ fix

  useEffect(() => {
    // Simulate loading time (e.g., API call, routing, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s fake loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Warm up the backend to reduce cold-start/CORS edge cases
    api.getApiStatus();
  }, []);


  if (loading) {
    return <Loader />; // ✅ show loader
  }

  return (
    <BrowserRouter>
 <ScrollToTopWrapper />
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
          path="/school-students"
          element={
            <Layout>
              <SchoolStudents />
            </Layout>
          }
        />
        <Route
          path="/for8th"
          element={
            <Layout>
              <SchoolLayout />
            </Layout>
          }
        />
        <Route
          path="/for10th"
          element={
            <Layout>
              <SchoolLayout />
            </Layout>
          }
        />
        <Route
          path="/for12th"
          element={
            <Layout>
              <SchoolLayout />
            </Layout>
          }
        />
        <Route
          path="/diploma"
          element={
            <Layout>
              <SchoolLayout />
            </Layout>
          }
        />
        <Route
          path="/skilldevelopment"
          element={
            <Layout>
              <SchoolLayout />
            </Layout>
          }
        />
        <Route
          path="/college-students"
          element={
            <Layout>
              <CollegeStudents />
            </Layout>
          }
        />
        <Route
          path="/bachelors"
          element={
            <Layout>
              <CollegeLayout />
            </Layout>
          }
        />
        <Route
          path="/engineeringbranch"
          element={
            <Layout>
              <CollegeLayout />
            </Layout>
          }
        />
        <Route
          path="/masterdegree"
          element={
            <Layout>
              <CollegeLayout />
            </Layout>
          }
        />
        <Route
          path="/careercluster"
          element={
            <Layout>
              <CollegeLayout />
            </Layout>
          }
        />
        <Route
          path="/working-professional"
          element={
            <Layout>
              <WorkingProfessinal />
            </Layout>
          }
        />
        <Route
          path="/coorparateprogress"
          element={
            <Layout>
              <WorkingLayout />
            </Layout>
          }
        />
        <Route
          path="/changejob"
          element={
            <Layout>
              <WorkingLayout />
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
        <Route
          path="/chat"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />
        <Route path="/login-redirect" element={<LoginRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
