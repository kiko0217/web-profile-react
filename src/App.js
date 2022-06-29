import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <div className="brand">Website Anzis Kita</div>
      <nav className='nav'>
        <Link className='nav-item' to="/">Home</Link>
        <Link className='nav-item' to="/blog">Blog</Link>
        <Link className='nav-item' to="/profile">Profile</Link>
        <Link className='nav-item' to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:id" element={<BlogDetail />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
