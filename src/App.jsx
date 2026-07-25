import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 md:px-0 py-10 md:py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <div className="text-center py-20">
      <p className="stamp text-primary mb-4">card missing</p>
      <h1 className="font-serif text-3xl mb-2">Nothing filed under that name.</h1>
      <p className="text-base-content/70">Try the blog index instead.</p>
    </div>
  )
}
