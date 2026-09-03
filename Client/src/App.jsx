import { Routes, Route } from "react-router-dom"
import PageWrapper from "./components/layout/PageWrapper.jsx"
import SmoothScroll from "./components/layout/SmoothScroll.jsx"
import ScrollToTop from "./components/layout/ScrollToTop.jsx"
import Home from "./pages/Home.jsx"
import ServiceDetail from "./pages/services/ServiceDetail.jsx"
import Work from "./pages/Work.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Blog from "./pages/Blog.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"
import { Navigate } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import StartProject from "./pages/StartProject.jsx"
import Admin from "./pages/Admin.jsx"

function PublicRoutes() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/new" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </PageWrapper>
  )
}

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </SmoothScroll>
  )
}

export default App
