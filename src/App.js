import { Route, Routes } from 'react-router-dom';
import NavBar from './routes/NavBar';
import AllFile from './routes/MainFile';
import Login from './routes/Login';
import SignUp from './routes/Sign-up';
import Post from './routes/Post';
import { SearchProvider } from './context/SearchContext';
import { SignInProvider } from './context/SignInContext';
import { FindQuestion } from './routes/FindQuestion';

export default function App() {
  return (
    <SearchProvider><SignInProvider>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<AllFile />} />
          <Route path='post' element={<Post />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path="find-question" element={<FindQuestion />} />
        </Route>
      </Routes>
      </SignInProvider>
    </SearchProvider>
  );
}
