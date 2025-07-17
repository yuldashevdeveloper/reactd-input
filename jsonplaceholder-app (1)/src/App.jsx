import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Albums from './pages/Albums';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;