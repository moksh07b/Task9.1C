import { Route, Routes } from 'react-router-dom';
import NavBar from './routes/NavBar';
import AllFile from './routes/MainFile';
import Login from './routes/Login';
import SignUp from './routes/Sign-up';
import Post from './routes/Post';
import { SearchProvider } from './context/SearchContext';
import { FindQuestion } from './routes/FindQuestion';

export default function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<AllFile />} />
          <Route path='post' element={<Post />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path="find-question" element={<FindQuestion />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}
